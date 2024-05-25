/* eslint-disable */
"use client";
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getAIModel } from "./graphql/queries";
import { updateAIModel } from "./graphql/mutations";
const client = generateClient();
export default function AIModelUpdateForm(props) {
  const {
    id: idProp,
    aIModel: aIModelModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    ownersWallet: "",
    description: "",
    accuracy: "",
    app: "",
    price: "",
    status: "",
    serialisedConfig: "",
    published: false,
    createdAt: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [ownersWallet, setOwnersWallet] = React.useState(
    initialValues.ownersWallet
  );
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [accuracy, setAccuracy] = React.useState(initialValues.accuracy);
  const [app, setApp] = React.useState(initialValues.app);
  const [price, setPrice] = React.useState(initialValues.price);
  const [status, setStatus] = React.useState(initialValues.status);
  const [serialisedConfig, setSerialisedConfig] = React.useState(
    initialValues.serialisedConfig
  );
  const [published, setPublished] = React.useState(initialValues.published);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = aIModelRecord
      ? { ...initialValues, ...aIModelRecord }
      : initialValues;
    setName(cleanValues.name);
    setOwnersWallet(cleanValues.ownersWallet);
    setDescription(cleanValues.description);
    setAccuracy(cleanValues.accuracy);
    setApp(cleanValues.app);
    setPrice(cleanValues.price);
    setStatus(cleanValues.status);
    setSerialisedConfig(
      typeof cleanValues.serialisedConfig === "string" ||
        cleanValues.serialisedConfig === null
        ? cleanValues.serialisedConfig
        : JSON.stringify(cleanValues.serialisedConfig)
    );
    setPublished(cleanValues.published);
    setCreatedAt(cleanValues.createdAt);
    setErrors({});
  };
  const [aIModelRecord, setAIModelRecord] = React.useState(aIModelModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getAIModel.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getAIModel
        : aIModelModelProp;
      setAIModelRecord(record);
    };
    queryData();
  }, [idProp, aIModelModelProp]);
  React.useEffect(resetStateValues, [aIModelRecord]);
  const validations = {
    name: [],
    ownersWallet: [],
    description: [],
    accuracy: [],
    app: [],
    price: [],
    status: [],
    serialisedConfig: [{ type: "JSON" }],
    published: [],
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
          name: name ?? null,
          ownersWallet: ownersWallet ?? null,
          description: description ?? null,
          accuracy: accuracy ?? null,
          app: app ?? null,
          price: price ?? null,
          status: status ?? null,
          serialisedConfig: serialisedConfig ?? null,
          published: published ?? null,
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
            query: updateAIModel.replaceAll("__typename", ""),
            variables: {
              input: {
                id: aIModelRecord.id,
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
      {...getOverrideProps(overrides, "AIModelUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              ownersWallet,
              description,
              accuracy,
              app,
              price,
              status,
              serialisedConfig,
              published,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Owners wallet"
        isRequired={false}
        isReadOnly={false}
        value={ownersWallet}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              ownersWallet: value,
              description,
              accuracy,
              app,
              price,
              status,
              serialisedConfig,
              published,
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
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              ownersWallet,
              description: value,
              accuracy,
              app,
              price,
              status,
              serialisedConfig,
              published,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Accuracy"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={accuracy}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              ownersWallet,
              description,
              accuracy: value,
              app,
              price,
              status,
              serialisedConfig,
              published,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.accuracy ?? value;
          }
          if (errors.accuracy?.hasError) {
            runValidationTasks("accuracy", value);
          }
          setAccuracy(value);
        }}
        onBlur={() => runValidationTasks("accuracy", accuracy)}
        errorMessage={errors.accuracy?.errorMessage}
        hasError={errors.accuracy?.hasError}
        {...getOverrideProps(overrides, "accuracy")}
      ></TextField>
      <TextField
        label="App"
        isRequired={false}
        isReadOnly={false}
        value={app}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              ownersWallet,
              description,
              accuracy,
              app: value,
              price,
              status,
              serialisedConfig,
              published,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.app ?? value;
          }
          if (errors.app?.hasError) {
            runValidationTasks("app", value);
          }
          setApp(value);
        }}
        onBlur={() => runValidationTasks("app", app)}
        errorMessage={errors.app?.errorMessage}
        hasError={errors.app?.hasError}
        {...getOverrideProps(overrides, "app")}
      ></TextField>
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
              name,
              ownersWallet,
              description,
              accuracy,
              app,
              price: value,
              status,
              serialisedConfig,
              published,
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
        label="Status"
        isRequired={false}
        isReadOnly={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              ownersWallet,
              description,
              accuracy,
              app,
              price,
              status: value,
              serialisedConfig,
              published,
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
      <TextAreaField
        label="Serialised config"
        isRequired={false}
        isReadOnly={false}
        value={serialisedConfig}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              ownersWallet,
              description,
              accuracy,
              app,
              price,
              status,
              serialisedConfig: value,
              published,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.serialisedConfig ?? value;
          }
          if (errors.serialisedConfig?.hasError) {
            runValidationTasks("serialisedConfig", value);
          }
          setSerialisedConfig(value);
        }}
        onBlur={() => runValidationTasks("serialisedConfig", serialisedConfig)}
        errorMessage={errors.serialisedConfig?.errorMessage}
        hasError={errors.serialisedConfig?.hasError}
        {...getOverrideProps(overrides, "serialisedConfig")}
      ></TextAreaField>
      <SwitchField
        label="Published"
        defaultChecked={false}
        isDisabled={false}
        isChecked={published}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              ownersWallet,
              description,
              accuracy,
              app,
              price,
              status,
              serialisedConfig,
              published: value,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.published ?? value;
          }
          if (errors.published?.hasError) {
            runValidationTasks("published", value);
          }
          setPublished(value);
        }}
        onBlur={() => runValidationTasks("published", published)}
        errorMessage={errors.published?.errorMessage}
        hasError={errors.published?.hasError}
        {...getOverrideProps(overrides, "published")}
      ></SwitchField>
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
              name,
              ownersWallet,
              description,
              accuracy,
              app,
              price,
              status,
              serialisedConfig,
              published,
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
          isDisabled={!(idProp || aIModelModelProp)}
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
              !(idProp || aIModelModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
