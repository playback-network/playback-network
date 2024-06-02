import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type TaskCreateFormInputValues = {
    mediaId?: string;
    walletAddress?: string;
    name?: string;
    description?: string;
    price?: number;
    difficulty?: number;
    dataPayload?: string;
    app?: string;
    appImage?: string;
};
export declare type TaskCreateFormValidationValues = {
    mediaId?: ValidationFunction<string>;
    walletAddress?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    difficulty?: ValidationFunction<number>;
    dataPayload?: ValidationFunction<string>;
    app?: ValidationFunction<string>;
    appImage?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TaskCreateFormOverridesProps = {
    TaskCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    mediaId?: PrimitiveOverrideProps<TextFieldProps>;
    walletAddress?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextAreaFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    difficulty?: PrimitiveOverrideProps<TextFieldProps>;
    dataPayload?: PrimitiveOverrideProps<TextFieldProps>;
    app?: PrimitiveOverrideProps<TextFieldProps>;
    appImage?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TaskCreateFormProps = React.PropsWithChildren<{
    overrides?: TaskCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TaskCreateFormInputValues) => TaskCreateFormInputValues;
    onSuccess?: (fields: TaskCreateFormInputValues) => void;
    onError?: (fields: TaskCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TaskCreateFormInputValues) => TaskCreateFormInputValues;
    onValidate?: TaskCreateFormValidationValues;
} & React.CSSProperties>;
export default function TaskCreateForm(props: TaskCreateFormProps): React.ReactElement;
