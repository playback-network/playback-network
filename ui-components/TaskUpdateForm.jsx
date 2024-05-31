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
import { getTask } from "./graphql/queries";
import { updateTask } from "./graphql/mutations";
const client = generateClient();
export default function TaskUpdateForm(props) {
  const {
    id: idProp,
    task: taskModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    mediaId: "",
    walletAddress: "",
    name: "",
    description: "",
    difficulty: "",
    app: "",
    appImage: "",
  };
  const [mediaId, setMediaId] = React.useState(initialValues.mediaId);
  const [walletAddress, setWalletAddress] = React.useState(
    initialValues.walletAddress
  );
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [difficulty, setDifficulty] = React.useState(initialValues.difficulty);
  const [app, setApp] = React.useState(initialValues.app);
  const [appImage, setAppImage] = React.useState(initialValues.appImage);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = taskRecord
      ? { ...initialValues, ...taskRecord }
      : initialValues;
    setMediaId(cleanValues.mediaId);
    setWalletAddress(cleanValues.walletAddress);
    setName(cleanValues.name);
    setDescription(
      typeof cleanValues.description === "string" ||
        cleanValues.description === null
        ? cleanValues.description
        : JSON.stringify(cleanValues.description)
    );
    setDifficulty(cleanValues.difficulty);
    setApp(cleanValues.app);
    setAppImage(cleanValues.appImage);
    setErrors({});
  };
  const [taskRecord, setTaskRecord] = React.useState(taskModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getTask.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getTask
        : taskModelProp;
      setTaskRecord(record);
    };
    queryData();
  }, [idProp, taskModelProp]);
  React.useEffect(resetStateValues, [taskRecord]);
  const validations = {
    mediaId: [],
    walletAddress: [],
    name: [],
    description: [{ type: "JSON" }],
    difficulty: [],
    app: [],
    appImage: [],
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
          mediaId: mediaId ?? null,
          walletAddress: walletAddress ?? null,
          name: name ?? null,
          description: description ?? null,
          difficulty: difficulty ?? null,
          app: app ?? null,
          appImage: appImage ?? null,
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
            query: updateTask.replaceAll("__typename", ""),
            variables: {
              input: {
                id: taskRecord.id,
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
      {...getOverrideProps(overrides, "TaskUpdateForm")}
      {...rest}
    >
      <TextField
        label="Media id"
        isRequired={false}
        isReadOnly={false}
        value={mediaId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mediaId: value,
              walletAddress,
              name,
              description,
              difficulty,
              app,
              appImage,
            };
            const result = onChange(modelFields);
            value = result?.mediaId ?? value;
          }
          if (errors.mediaId?.hasError) {
            runValidationTasks("mediaId", value);
          }
          setMediaId(value);
        }}
        onBlur={() => runValidationTasks("mediaId", mediaId)}
        errorMessage={errors.mediaId?.errorMessage}
        hasError={errors.mediaId?.hasError}
        {...getOverrideProps(overrides, "mediaId")}
      ></TextField>
      <TextField
        label="Wallet address"
        isRequired={false}
        isReadOnly={false}
        value={walletAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mediaId,
              walletAddress: value,
              name,
              description,
              difficulty,
              app,
              appImage,
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
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mediaId,
              walletAddress,
              name: value,
              description,
              difficulty,
              app,
              appImage,
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
      <TextAreaField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mediaId,
              walletAddress,
              name,
              description: value,
              difficulty,
              app,
              appImage,
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
      ></TextAreaField>
      <TextField
        label="Difficulty"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={difficulty}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              mediaId,
              walletAddress,
              name,
              description,
              difficulty: value,
              app,
              appImage,
            };
            const result = onChange(modelFields);
            value = result?.difficulty ?? value;
          }
          if (errors.difficulty?.hasError) {
            runValidationTasks("difficulty", value);
          }
          setDifficulty(value);
        }}
        onBlur={() => runValidationTasks("difficulty", difficulty)}
        errorMessage={errors.difficulty?.errorMessage}
        hasError={errors.difficulty?.hasError}
        {...getOverrideProps(overrides, "difficulty")}
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
              mediaId,
              walletAddress,
              name,
              description,
              difficulty,
              app: value,
              appImage,
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
        label="App image"
        isRequired={false}
        isReadOnly={false}
        value={appImage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mediaId,
              walletAddress,
              name,
              description,
              difficulty,
              app,
              appImage: value,
            };
            const result = onChange(modelFields);
            value = result?.appImage ?? value;
          }
          if (errors.appImage?.hasError) {
            runValidationTasks("appImage", value);
          }
          setAppImage(value);
        }}
        onBlur={() => runValidationTasks("appImage", appImage)}
        errorMessage={errors.appImage?.errorMessage}
        hasError={errors.appImage?.hasError}
        {...getOverrideProps(overrides, "appImage")}
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
          isDisabled={!(idProp || taskModelProp)}
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
              !(idProp || taskModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
