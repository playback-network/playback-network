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
export declare type AIModelCreateFormInputValues = {
    name?: string;
    ownersWallet?: string;
    description?: string;
    accuracy?: number;
    app?: string;
    price?: number;
    status?: string;
    serialisedConfig?: string;
    published?: boolean;
    createdAt?: string;
};
export declare type AIModelCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    ownersWallet?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    accuracy?: ValidationFunction<number>;
    app?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    status?: ValidationFunction<string>;
    serialisedConfig?: ValidationFunction<string>;
    published?: ValidationFunction<boolean>;
    createdAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AIModelCreateFormOverridesProps = {
    AIModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    ownersWallet?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    accuracy?: PrimitiveOverrideProps<TextFieldProps>;
    app?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    serialisedConfig?: PrimitiveOverrideProps<TextAreaFieldProps>;
    published?: PrimitiveOverrideProps<SwitchFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AIModelCreateFormProps = React.PropsWithChildren<{
    overrides?: AIModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AIModelCreateFormInputValues) => AIModelCreateFormInputValues;
    onSuccess?: (fields: AIModelCreateFormInputValues) => void;
    onError?: (fields: AIModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AIModelCreateFormInputValues) => AIModelCreateFormInputValues;
    onValidate?: AIModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function AIModelCreateForm(props: AIModelCreateFormProps): React.ReactElement;
