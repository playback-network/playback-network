import * as React from "react";
import { GridProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { AIModel } from "./graphql/types";
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
export declare type AIModelUpdateFormInputValues = {
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
export declare type AIModelUpdateFormValidationValues = {
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
export declare type AIModelUpdateFormOverridesProps = {
    AIModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type AIModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: AIModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    aIModel?: AIModel;
    onSubmit?: (fields: AIModelUpdateFormInputValues) => AIModelUpdateFormInputValues;
    onSuccess?: (fields: AIModelUpdateFormInputValues) => void;
    onError?: (fields: AIModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AIModelUpdateFormInputValues) => AIModelUpdateFormInputValues;
    onValidate?: AIModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AIModelUpdateForm(props: AIModelUpdateFormProps): React.ReactElement;
