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
import { createTask } from "./graphql/mutations";
const client = generateClient();
export default function TaskCreateForm(props) {
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
    mediaId: "",
    aiModelId: "",
    ownersWallet: "",
    name: "",
    description: "",
    difficulty: "",
    priceListed: "",
    status: "",
    apps: "",
    published: false,
    createdAt: "",
  };
  const [mediaId, setMediaId] = React.useState(initialValues.mediaId);
  const [aiModelId, setAiModelId] = React.useState(initialValues.aiModelId);
  const [ownersWallet, setOwnersWallet] = React.useState(
    initialValues.ownersWallet
  );
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [difficulty, setDifficulty] = React.useState(initialValues.difficulty);
  const [priceListed, setPriceListed] = React.useState(
    initialValues.priceListed
  );
  const [status, setStatus] = React.useState(initialValues.status);
  const [apps, setApps] = React.useState(initialValues.apps);
  const [published, setPublished] = React.useState(initialValues.published);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setMediaId(initialValues.mediaId);
    setAiModelId(initialValues.aiModelId);
    setOwnersWallet(initialValues.ownersWallet);
    setName(initialValues.name);
    setDescription(initialValues.description);
    setDifficulty(initialValues.difficulty);
    setPriceListed(initialValues.priceListed);
    setStatus(initialValues.status);
    setApps(initialValues.apps);
    setPublished(initialValues.published);
    setCreatedAt(initialValues.createdAt);
    setErrors({});
  };
  const validations = {
    mediaId: [],
    aiModelId: [],
    ownersWallet: [],
    name: [],
    description: [],
    difficulty: [],
    priceListed: [],
    status: [],
    apps: [{ type: "JSON" }],
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
          mediaId,
          aiModelId,
          ownersWallet,
          name,
          description,
          difficulty,
          priceListed,
          status,
          apps,
          published,
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
            query: createTask.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "TaskCreateForm")}
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
              aiModelId,
              ownersWallet,
              name,
              description,
              difficulty,
              priceListed,
              status,
              apps,
              published,
              createdAt,
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
        label="Ai model id"
        isRequired={false}
        isReadOnly={false}
        value={aiModelId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mediaId,
              aiModelId: value,
              ownersWallet,
              name,
              description,
              difficulty,
              priceListed,
              status,
              apps,
              published,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.aiModelId ?? value;
          }
          if (errors.aiModelId?.hasError) {
            runValidationTasks("aiModelId", value);
          }
          setAiModelId(value);
        }}
        onBlur={() => runValidationTasks("aiModelId", aiModelId)}
        errorMessage={errors.aiModelId?.errorMessage}
        hasError={errors.aiModelId?.hasError}
        {...getOverrideProps(overrides, "aiModelId")}
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
              mediaId,
              aiModelId,
              ownersWallet: value,
              name,
              description,
              difficulty,
              priceListed,
              status,
              apps,
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
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mediaId,
              aiModelId,
              ownersWallet,
              name: value,
              description,
              difficulty,
              priceListed,
              status,
              apps,
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
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mediaId,
              aiModelId,
              ownersWallet,
              name,
              description: value,
              difficulty,
              priceListed,
              status,
              apps,
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
              aiModelId,
              ownersWallet,
              name,
              description,
              difficulty: value,
              priceListed,
              status,
              apps,
              published,
              createdAt,
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
        label="Price listed"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={priceListed}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              mediaId,
              aiModelId,
              ownersWallet,
              name,
              description,
              difficulty,
              priceListed: value,
              status,
              apps,
              published,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.priceListed ?? value;
          }
          if (errors.priceListed?.hasError) {
            runValidationTasks("priceListed", value);
          }
          setPriceListed(value);
        }}
        onBlur={() => runValidationTasks("priceListed", priceListed)}
        errorMessage={errors.priceListed?.errorMessage}
        hasError={errors.priceListed?.hasError}
        {...getOverrideProps(overrides, "priceListed")}
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
              mediaId,
              aiModelId,
              ownersWallet,
              name,
              description,
              difficulty,
              priceListed,
              status: value,
              apps,
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
        label="Apps"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mediaId,
              aiModelId,
              ownersWallet,
              name,
              description,
              difficulty,
              priceListed,
              status,
              apps: value,
              published,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.apps ?? value;
          }
          if (errors.apps?.hasError) {
            runValidationTasks("apps", value);
          }
          setApps(value);
        }}
        onBlur={() => runValidationTasks("apps", apps)}
        errorMessage={errors.apps?.errorMessage}
        hasError={errors.apps?.hasError}
        {...getOverrideProps(overrides, "apps")}
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
              mediaId,
              aiModelId,
              ownersWallet,
              name,
              description,
              difficulty,
              priceListed,
              status,
              apps,
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
        value={createdAt && convertToLocal(new Date(createdAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              mediaId,
              aiModelId,
              ownersWallet,
              name,
              description,
              difficulty,
              priceListed,
              status,
              apps,
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
