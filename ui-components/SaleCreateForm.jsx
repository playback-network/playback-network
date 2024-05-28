/* eslint-disable */
"use client";
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createSale } from "./graphql/mutations";
const client = generateClient();
export default function SaleCreateForm(props) {
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
    taskId: "",
    aiModelId: "",
    priceListed: "",
    pricePaid: "",
    isAuction: false,
    app: "",
    sellerssWallet: "",
    buyersWallet: "",
    transactionLedgerId: "",
    status: "",
    published: false,
    createdAt: "",
  };
  const [taskId, setTaskId] = React.useState(initialValues.taskId);
  const [aiModelId, setAiModelId] = React.useState(initialValues.aiModelId);
  const [priceListed, setPriceListed] = React.useState(
    initialValues.priceListed
  );
  const [pricePaid, setPricePaid] = React.useState(initialValues.pricePaid);
  const [isAuction, setIsAuction] = React.useState(initialValues.isAuction);
  const [app, setApp] = React.useState(initialValues.app);
  const [sellerssWallet, setSellerssWallet] = React.useState(
    initialValues.sellerssWallet
  );
  const [buyersWallet, setBuyersWallet] = React.useState(
    initialValues.buyersWallet
  );
  const [transactionLedgerId, setTransactionLedgerId] = React.useState(
    initialValues.transactionLedgerId
  );
  const [status, setStatus] = React.useState(initialValues.status);
  const [published, setPublished] = React.useState(initialValues.published);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTaskId(initialValues.taskId);
    setAiModelId(initialValues.aiModelId);
    setPriceListed(initialValues.priceListed);
    setPricePaid(initialValues.pricePaid);
    setIsAuction(initialValues.isAuction);
    setApp(initialValues.app);
    setSellerssWallet(initialValues.sellerssWallet);
    setBuyersWallet(initialValues.buyersWallet);
    setTransactionLedgerId(initialValues.transactionLedgerId);
    setStatus(initialValues.status);
    setPublished(initialValues.published);
    setCreatedAt(initialValues.createdAt);
    setErrors({});
  };
  const validations = {
    taskId: [],
    aiModelId: [],
    priceListed: [],
    pricePaid: [],
    isAuction: [],
    app: [],
    sellerssWallet: [],
    buyersWallet: [],
    transactionLedgerId: [],
    status: [],
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
          taskId,
          aiModelId,
          priceListed,
          pricePaid,
          isAuction,
          app,
          sellerssWallet,
          buyersWallet,
          transactionLedgerId,
          status,
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
            query: createSale.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "SaleCreateForm")}
      {...rest}
    >
      <TextField
        label="Task id"
        isRequired={false}
        isReadOnly={false}
        value={taskId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              taskId: value,
              aiModelId,
              priceListed,
              pricePaid,
              isAuction,
              app,
              sellerssWallet,
              buyersWallet,
              transactionLedgerId,
              status,
              published,
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
        label="Ai model id"
        isRequired={false}
        isReadOnly={false}
        value={aiModelId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              taskId,
              aiModelId: value,
              priceListed,
              pricePaid,
              isAuction,
              app,
              sellerssWallet,
              buyersWallet,
              transactionLedgerId,
              status,
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
              taskId,
              aiModelId,
              priceListed: value,
              pricePaid,
              isAuction,
              app,
              sellerssWallet,
              buyersWallet,
              transactionLedgerId,
              status,
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
        label="Price paid"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={pricePaid}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              taskId,
              aiModelId,
              priceListed,
              pricePaid: value,
              isAuction,
              app,
              sellerssWallet,
              buyersWallet,
              transactionLedgerId,
              status,
              published,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.pricePaid ?? value;
          }
          if (errors.pricePaid?.hasError) {
            runValidationTasks("pricePaid", value);
          }
          setPricePaid(value);
        }}
        onBlur={() => runValidationTasks("pricePaid", pricePaid)}
        errorMessage={errors.pricePaid?.errorMessage}
        hasError={errors.pricePaid?.hasError}
        {...getOverrideProps(overrides, "pricePaid")}
      ></TextField>
      <SwitchField
        label="Is auction"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isAuction}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              taskId,
              aiModelId,
              priceListed,
              pricePaid,
              isAuction: value,
              app,
              sellerssWallet,
              buyersWallet,
              transactionLedgerId,
              status,
              published,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.isAuction ?? value;
          }
          if (errors.isAuction?.hasError) {
            runValidationTasks("isAuction", value);
          }
          setIsAuction(value);
        }}
        onBlur={() => runValidationTasks("isAuction", isAuction)}
        errorMessage={errors.isAuction?.errorMessage}
        hasError={errors.isAuction?.hasError}
        {...getOverrideProps(overrides, "isAuction")}
      ></SwitchField>
      <TextField
        label="App"
        isRequired={false}
        isReadOnly={false}
        value={app}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              taskId,
              aiModelId,
              priceListed,
              pricePaid,
              isAuction,
              app: value,
              sellerssWallet,
              buyersWallet,
              transactionLedgerId,
              status,
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
        label="Sellerss wallet"
        isRequired={false}
        isReadOnly={false}
        value={sellerssWallet}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              taskId,
              aiModelId,
              priceListed,
              pricePaid,
              isAuction,
              app,
              sellerssWallet: value,
              buyersWallet,
              transactionLedgerId,
              status,
              published,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.sellerssWallet ?? value;
          }
          if (errors.sellerssWallet?.hasError) {
            runValidationTasks("sellerssWallet", value);
          }
          setSellerssWallet(value);
        }}
        onBlur={() => runValidationTasks("sellerssWallet", sellerssWallet)}
        errorMessage={errors.sellerssWallet?.errorMessage}
        hasError={errors.sellerssWallet?.hasError}
        {...getOverrideProps(overrides, "sellerssWallet")}
      ></TextField>
      <TextField
        label="Buyers wallet"
        isRequired={false}
        isReadOnly={false}
        value={buyersWallet}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              taskId,
              aiModelId,
              priceListed,
              pricePaid,
              isAuction,
              app,
              sellerssWallet,
              buyersWallet: value,
              transactionLedgerId,
              status,
              published,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.buyersWallet ?? value;
          }
          if (errors.buyersWallet?.hasError) {
            runValidationTasks("buyersWallet", value);
          }
          setBuyersWallet(value);
        }}
        onBlur={() => runValidationTasks("buyersWallet", buyersWallet)}
        errorMessage={errors.buyersWallet?.errorMessage}
        hasError={errors.buyersWallet?.hasError}
        {...getOverrideProps(overrides, "buyersWallet")}
      ></TextField>
      <TextField
        label="Transaction ledger id"
        isRequired={false}
        isReadOnly={false}
        value={transactionLedgerId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              taskId,
              aiModelId,
              priceListed,
              pricePaid,
              isAuction,
              app,
              sellerssWallet,
              buyersWallet,
              transactionLedgerId: value,
              status,
              published,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.transactionLedgerId ?? value;
          }
          if (errors.transactionLedgerId?.hasError) {
            runValidationTasks("transactionLedgerId", value);
          }
          setTransactionLedgerId(value);
        }}
        onBlur={() =>
          runValidationTasks("transactionLedgerId", transactionLedgerId)
        }
        errorMessage={errors.transactionLedgerId?.errorMessage}
        hasError={errors.transactionLedgerId?.hasError}
        {...getOverrideProps(overrides, "transactionLedgerId")}
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
              taskId,
              aiModelId,
              priceListed,
              pricePaid,
              isAuction,
              app,
              sellerssWallet,
              buyersWallet,
              transactionLedgerId,
              status: value,
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
      <SwitchField
        label="Published"
        defaultChecked={false}
        isDisabled={false}
        isChecked={published}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              taskId,
              aiModelId,
              priceListed,
              pricePaid,
              isAuction,
              app,
              sellerssWallet,
              buyersWallet,
              transactionLedgerId,
              status,
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
              taskId,
              aiModelId,
              priceListed,
              pricePaid,
              isAuction,
              app,
              sellerssWallet,
              buyersWallet,
              transactionLedgerId,
              status,
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
