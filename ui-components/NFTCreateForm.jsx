/* eslint-disable */
"use client";
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createNFT } from "./graphql/mutations";
const client = generateClient();
export default function NFTCreateForm(props) {
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
    ownersWallet: "",
    blockAddress: "",
    cid: "",
    sizeGb: "",
    metadata: "",
    price: "",
    createdAt: "",
  };
  const [ownersWallet, setOwnersWallet] = React.useState(
    initialValues.ownersWallet
  );
  const [blockAddress, setBlockAddress] = React.useState(
    initialValues.blockAddress
  );
  const [cid, setCid] = React.useState(initialValues.cid);
  const [sizeGb, setSizeGb] = React.useState(initialValues.sizeGb);
  const [metadata, setMetadata] = React.useState(initialValues.metadata);
  const [price, setPrice] = React.useState(initialValues.price);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setOwnersWallet(initialValues.ownersWallet);
    setBlockAddress(initialValues.blockAddress);
    setCid(initialValues.cid);
    setSizeGb(initialValues.sizeGb);
    setMetadata(initialValues.metadata);
    setPrice(initialValues.price);
    setCreatedAt(initialValues.createdAt);
    setErrors({});
  };
  const validations = {
    ownersWallet: [],
    blockAddress: [],
    cid: [],
    sizeGb: [],
    metadata: [{ type: "JSON" }],
    price: [],
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
  const convertTimeStampToDate = (ts) => {
    if (Math.abs(Date.now() - ts) < Math.abs(Date.now() - ts * 1000)) {
      return new Date(ts);
    }
    return new Date(ts * 1000);
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
          ownersWallet,
          blockAddress,
          cid,
          sizeGb,
          metadata,
          price,
          createdAt,
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
            query: createNFT.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "NFTCreateForm")}
      {...rest}
    >
      <TextField
        label="Owners wallet"
        isRequired={false}
        isReadOnly={false}
        value={ownersWallet}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ownersWallet: value,
              blockAddress,
              cid,
              sizeGb,
              metadata,
              price,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.ownersWallet ?? value;
          }
          if (errors.ownersWallet?.hasError) {
            runValidationTasks("ownersWallet", value);
          }
          setOwnersWallet(value);
        }}
        onBlur={() => runValidationTasks("ownersWallet", ownersWallet)}
        errorMessage={errors.ownersWallet?.errorMessage}
        hasError={errors.ownersWallet?.hasError}
        {...getOverrideProps(overrides, "ownersWallet")}
      ></TextField>
      <TextField
        label="Block address"
        isRequired={false}
        isReadOnly={false}
        value={blockAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ownersWallet,
              blockAddress: value,
              cid,
              sizeGb,
              metadata,
              price,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.blockAddress ?? value;
          }
          if (errors.blockAddress?.hasError) {
            runValidationTasks("blockAddress", value);
          }
          setBlockAddress(value);
        }}
        onBlur={() => runValidationTasks("blockAddress", blockAddress)}
        errorMessage={errors.blockAddress?.errorMessage}
        hasError={errors.blockAddress?.hasError}
        {...getOverrideProps(overrides, "blockAddress")}
      ></TextField>
      <TextField
        label="Cid"
        isRequired={false}
        isReadOnly={false}
        value={cid}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ownersWallet,
              blockAddress,
              cid: value,
              sizeGb,
              metadata,
              price,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.cid ?? value;
          }
          if (errors.cid?.hasError) {
            runValidationTasks("cid", value);
          }
          setCid(value);
        }}
        onBlur={() => runValidationTasks("cid", cid)}
        errorMessage={errors.cid?.errorMessage}
        hasError={errors.cid?.hasError}
        {...getOverrideProps(overrides, "cid")}
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
              ownersWallet,
              blockAddress,
              cid,
              sizeGb: value,
              metadata,
              price,
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
      <TextAreaField
        label="Metadata"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ownersWallet,
              blockAddress,
              cid,
              sizeGb,
              metadata: value,
              price,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.metadata ?? value;
          }
          if (errors.metadata?.hasError) {
            runValidationTasks("metadata", value);
          }
          setMetadata(value);
        }}
        onBlur={() => runValidationTasks("metadata", metadata)}
        errorMessage={errors.metadata?.errorMessage}
        hasError={errors.metadata?.hasError}
        {...getOverrideProps(overrides, "metadata")}
      ></TextAreaField>
      <TextField
        label="Price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={price}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              ownersWallet,
              blockAddress,
              cid,
              sizeGb,
              metadata,
              price: value,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <TextField
        label="Created at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={createdAt && convertToLocal(convertTimeStampToDate(createdAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : Number(new Date(e.target.value));
          if (onChange) {
            const modelFields = {
              ownersWallet,
              blockAddress,
              cid,
              sizeGb,
              metadata,
              price,
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
