import * as React from "react";
import { GridProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type AppCreateFormInputValues = {
    name?: string;
    description?: string;
    rank?: number;
    tasks?: string;
    status?: string;
    published?: boolean;
    createdAt?: string;
};
export declare type AppCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    rank?: ValidationFunction<number>;
    tasks?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    published?: ValidationFunction<boolean>;
    createdAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AppCreateFormOverridesProps = {
    AppCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    rank?: PrimitiveOverrideProps<TextFieldProps>;
    tasks?: PrimitiveOverrideProps<TextAreaFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    published?: PrimitiveOverrideProps<SwitchFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AppCreateFormProps = React.PropsWithChildren<{
    overrides?: AppCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AppCreateFormInputValues) => AppCreateFormInputValues;
    onSuccess?: (fields: AppCreateFormInputValues) => void;
    onError?: (fields: AppCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AppCreateFormInputValues) => AppCreateFormInputValues;
    onValidate?: AppCreateFormValidationValues;
} & React.CSSProperties>;
export default function AppCreateForm(props: AppCreateFormProps): React.ReactElement;
