/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getMedia } from "./graphql/queries";
import { updateMedia } from "./graphql/mutations";
const client = generateClient();
export default function MediaUpdateForm(props) {
  const {
    id: idProp,
    media: mediaModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    walletAddress: "",
    taskId: "",
    dataURL: "",
    ocr: "",
    format: "",
    sizeGb: "",
    status: "",
    createdAt: "",
  };
  const [walletAddress, setWalletAddress] = React.useState(
    initialValues.walletAddress
  );
  const [taskId, setTaskId] = React.useState(initialValues.taskId);
  const [dataURL, setDataURL] = React.useState(initialValues.dataURL);
  const [ocr, setOcr] = React.useState(initialValues.ocr);
  const [format, setFormat] = React.useState(initialValues.format);
  const [sizeGb, setSizeGb] = React.useState(initialValues.sizeGb);
  const [status, setStatus] = React.useState(initialValues.status);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = mediaRecord
      ? { ...initialValues, ...mediaRecord }
      : initialValues;
    setWalletAddress(cleanValues.walletAddress);
    setTaskId(cleanValues.taskId);
    setDataURL(cleanValues.dataURL);
    setOcr(cleanValues.ocr);
    setFormat(cleanValues.format);
    setSizeGb(cleanValues.sizeGb);
    setStatus(cleanValues.status);
    setCreatedAt(cleanValues.createdAt);
    setErrors({});
  };
  const [mediaRecord, setMediaRecord] = React.useState(mediaModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getMedia.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getMedia
        : mediaModelProp;
      setMediaRecord(record);
    };
    queryData();
  }, [idProp, mediaModelProp]);
  React.useEffect(resetStateValues, [mediaRecord]);
  const validations = {
    walletAddress: [],
    taskId: [],
    dataURL: [],
    ocr: [],
    format: [],
    sizeGb: [],
    status: [],
    createdAt: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          walletAddress: walletAddress ?? null,
          taskId: taskId ?? null,
          dataURL: dataURL ?? null,
          ocr: ocr ?? null,
          format: format ?? null,
          sizeGb: sizeGb ?? null,
          status: status ?? null,
          createdAt: createdAt ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateMedia.replaceAll("__typename", ""),
            variables: {
              input: {
                id: mediaRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "MediaUpdateForm")}
      {...rest}
    >
      <TextField
        label="Wallet address"
        isRequired={false}
        isReadOnly={false}
        value={walletAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              walletAddress: value,
              taskId,
              dataURL,
              ocr,
              format,
              sizeGb,
              status,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.walletAddress ?? value;
          }
          if (errors.walletAddress?.hasError) {
            runValidationTasks("walletAddress", value);
          }
          setWalletAddress(value);
        }}
        onBlur={() => runValidationTasks("walletAddress", walletAddress)}
        errorMessage={errors.walletAddress?.errorMessage}
        hasError={errors.walletAddress?.hasError}
        {...getOverrideProps(overrides, "walletAddress")}
      ></TextField>
      <TextField
        label="Task id"
        isRequired={false}
        isReadOnly={false}
        value={taskId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              walletAddress,
              taskId: value,
              dataURL,
              ocr,
              format,
              sizeGb,
              status,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.taskId ?? value;
          }
          if (errors.taskId?.hasError) {
            runValidationTasks("taskId", value);
          }
          setTaskId(value);
        }}
        onBlur={() => runValidationTasks("taskId", taskId)}
        errorMessage={errors.taskId?.errorMessage}
        hasError={errors.taskId?.hasError}
        {...getOverrideProps(overrides, "taskId")}
      ></TextField>
      <TextField
        label="Data url"
        isRequired={false}
        isReadOnly={false}
        value={dataURL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              walletAddress,
              taskId,
              dataURL: value,
              ocr,
              format,
              sizeGb,
              status,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.dataURL ?? value;
          }
          if (errors.dataURL?.hasError) {
            runValidationTasks("dataURL", value);
          }
          setDataURL(value);
        }}
        onBlur={() => runValidationTasks("dataURL", dataURL)}
        errorMessage={errors.dataURL?.errorMessage}
        hasError={errors.dataURL?.hasError}
        {...getOverrideProps(overrides, "dataURL")}
      ></TextField>
      <TextField
        label="Ocr"
        isRequired={false}
        isReadOnly={false}
        value={ocr}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              walletAddress,
              taskId,
              dataURL,
              ocr: value,
              format,
              sizeGb,
              status,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.ocr ?? value;
          }
          if (errors.ocr?.hasError) {
            runValidationTasks("ocr", value);
          }
          setOcr(value);
        }}
        onBlur={() => runValidationTasks("ocr", ocr)}
        errorMessage={errors.ocr?.errorMessage}
        hasError={errors.ocr?.hasError}
        {...getOverrideProps(overrides, "ocr")}
      ></TextField>
      <TextField
        label="Format"
        isRequired={false}
        isReadOnly={false}
        value={format}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              walletAddress,
              taskId,
              dataURL,
              ocr,
              format: value,
              sizeGb,
              status,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.format ?? value;
          }
          if (errors.format?.hasError) {
            runValidationTasks("format", value);
          }
          setFormat(value);
        }}
        onBlur={() => runValidationTasks("format", format)}
        errorMessage={errors.format?.errorMessage}
        hasError={errors.format?.hasError}
        {...getOverrideProps(overrides, "format")}
      ></TextField>
      <TextField
        label="Size gb"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={sizeGb}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              walletAddress,
              taskId,
              dataURL,
              ocr,
              format,
              sizeGb: value,
              status,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.sizeGb ?? value;
          }
          if (errors.sizeGb?.hasError) {
            runValidationTasks("sizeGb", value);
          }
          setSizeGb(value);
        }}
        onBlur={() => runValidationTasks("sizeGb", sizeGb)}
        errorMessage={errors.sizeGb?.errorMessage}
        hasError={errors.sizeGb?.hasError}
        {...getOverrideProps(overrides, "sizeGb")}
      ></TextField>
      <TextField
        label="Status"
        isRequired={false}
        isReadOnly={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              walletAddress,
              taskId,
              dataURL,
              ocr,
              format,
              sizeGb,
              status: value,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      ></TextField>
      <TextField
        label="Created at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={createdAt && convertToLocal(new Date(createdAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              walletAddress,
              taskId,
              dataURL,
              ocr,
              format,
              sizeGb,
              status,
              createdAt: value,
            };
            const result = onChange(modelFields);
            value = result?.createdAt ?? value;
          }
          if (errors.createdAt?.hasError) {
            runValidationTasks("createdAt", value);
          }
          setCreatedAt(value);
        }}
        onBlur={() => runValidationTasks("createdAt", createdAt)}
        errorMessage={errors.createdAt?.errorMessage}
        hasError={errors.createdAt?.hasError}
        {...getOverrideProps(overrides, "createdAt")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || mediaModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || mediaModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
