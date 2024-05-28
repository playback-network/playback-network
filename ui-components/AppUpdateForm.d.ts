import * as React from "react";
import { GridProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { App } from "./graphql/types";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AppUpdateFormInputValues = {
    name?: string;
    description?: string;
    rank?: number;
    tasks?: string;
    status?: string;
    published?: boolean;
    createdAt?: string;
};
export declare type AppUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    rank?: ValidationFunction<number>;
    tasks?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    published?: ValidationFunction<boolean>;
    createdAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AppUpdateFormOverridesProps = {
    AppUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    rank?: PrimitiveOverrideProps<TextFieldProps>;
    tasks?: PrimitiveOverrideProps<TextAreaFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    published?: PrimitiveOverrideProps<SwitchFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AppUpdateFormProps = React.PropsWithChildren<{
    overrides?: AppUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    app?: App;
    onSubmit?: (fields: AppUpdateFormInputValues) => AppUpdateFormInputValues;
    onSuccess?: (fields: AppUpdateFormInputValues) => void;
    onError?: (fields: AppUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AppUpdateFormInputValues) => AppUpdateFormInputValues;
    onValidate?: AppUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AppUpdateForm(props: AppUpdateFormProps): React.ReactElement;
