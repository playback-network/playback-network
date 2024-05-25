import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type MediaCreateFormInputValues = {
    ownersWallet?: string;
    type?: string;
    description?: string;
    sizeGb?: number;
    status?: string;
    createdAt?: number;
};
export declare type MediaCreateFormValidationValues = {
    ownersWallet?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    sizeGb?: ValidationFunction<number>;
    status?: ValidationFunction<string>;
    createdAt?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MediaCreateFormOverridesProps = {
    MediaCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ownersWallet?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    sizeGb?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MediaCreateFormProps = React.PropsWithChildren<{
    overrides?: MediaCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MediaCreateFormInputValues) => MediaCreateFormInputValues;
    onSuccess?: (fields: MediaCreateFormInputValues) => void;
    onError?: (fields: MediaCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MediaCreateFormInputValues) => MediaCreateFormInputValues;
    onValidate?: MediaCreateFormValidationValues;
} & React.CSSProperties>;
export default function MediaCreateForm(props: MediaCreateFormProps): React.ReactElement;
