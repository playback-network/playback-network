/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createMedia } from "./graphql/mutations";
const client = generateClient();
export default function MediaCreateForm(props) {
  const {
    clearOnSuccess = true,
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
    s3address: "",
    fileName: "",
    sizeMb: "",
  };
  const [walletAddress, setWalletAddress] = React.useState(
    initialValues.walletAddress
  );
  const [taskId, setTaskId] = React.useState(initialValues.taskId);
  const [s3address, setS3address] = React.useState(initialValues.s3address);
  const [fileName, setFileName] = React.useState(initialValues.fileName);
  const [sizeMb, setSizeMb] = React.useState(initialValues.sizeMb);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setWalletAddress(initialValues.walletAddress);
    setTaskId(initialValues.taskId);
    setS3address(initialValues.s3address);
    setFileName(initialValues.fileName);
    setSizeMb(initialValues.sizeMb);
    setErrors({});
  };
  const validations = {
    walletAddress: [],
    taskId: [],
    s3address: [],
    fileName: [],
    sizeMb: [],
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
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          walletAddress,
          taskId,
          s3address,
          fileName,
          sizeMb,
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
            query: createMedia.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "MediaCreateForm")}
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
              s3address,
              fileName,
              sizeMb,
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
              s3address,
              fileName,
              sizeMb,
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
        label="S3address"
        isRequired={false}
        isReadOnly={false}
        value={s3address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              walletAddress,
              taskId,
              s3address: value,
              fileName,
              sizeMb,
            };
            const result = onChange(modelFields);
            value = result?.s3address ?? value;
          }
          if (errors.s3address?.hasError) {
            runValidationTasks("s3address", value);
          }
          setS3address(value);
        }}
        onBlur={() => runValidationTasks("s3address", s3address)}
        errorMessage={errors.s3address?.errorMessage}
        hasError={errors.s3address?.hasError}
        {...getOverrideProps(overrides, "s3address")}
      ></TextField>
      <TextField
        label="File name"
        isRequired={false}
        isReadOnly={false}
        value={fileName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              walletAddress,
              taskId,
              s3address,
              fileName: value,
              sizeMb,
            };
            const result = onChange(modelFields);
            value = result?.fileName ?? value;
          }
          if (errors.fileName?.hasError) {
            runValidationTasks("fileName", value);
          }
          setFileName(value);
        }}
        onBlur={() => runValidationTasks("fileName", fileName)}
        errorMessage={errors.fileName?.errorMessage}
        hasError={errors.fileName?.hasError}
        {...getOverrideProps(overrides, "fileName")}
      ></TextField>
      <TextField
        label="Size mb"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={sizeMb}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              walletAddress,
              taskId,
              s3address,
              fileName,
              sizeMb: value,
            };
            const result = onChange(modelFields);
            value = result?.sizeMb ?? value;
          }
          if (errors.sizeMb?.hasError) {
            runValidationTasks("sizeMb", value);
          }
          setSizeMb(value);
        }}
        onBlur={() => runValidationTasks("sizeMb", sizeMb)}
        errorMessage={errors.sizeMb?.errorMessage}
        hasError={errors.sizeMb?.hasError}
        {...getOverrideProps(overrides, "sizeMb")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
