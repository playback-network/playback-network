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
export declare type NFTCreateFormInputValues = {
    ownersWallet?: string;
    blockAddress?: string;
    cid?: string;
    sizeGb?: number;
    metadata?: string;
    price?: number;
    createdAt?: string;
};
export declare type NFTCreateFormValidationValues = {
    ownersWallet?: ValidationFunction<string>;
    blockAddress?: ValidationFunction<string>;
    cid?: ValidationFunction<string>;
    sizeGb?: ValidationFunction<number>;
    metadata?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    createdAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NFTCreateFormOverridesProps = {
    NFTCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ownersWallet?: PrimitiveOverrideProps<TextFieldProps>;
    blockAddress?: PrimitiveOverrideProps<TextFieldProps>;
    cid?: PrimitiveOverrideProps<TextFieldProps>;
    sizeGb?: PrimitiveOverrideProps<TextFieldProps>;
    metadata?: PrimitiveOverrideProps<TextAreaFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NFTCreateFormProps = React.PropsWithChildren<{
    overrides?: NFTCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NFTCreateFormInputValues) => NFTCreateFormInputValues;
    onSuccess?: (fields: NFTCreateFormInputValues) => void;
    onError?: (fields: NFTCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NFTCreateFormInputValues) => NFTCreateFormInputValues;
    onValidate?: NFTCreateFormValidationValues;
} & React.CSSProperties>;
export default function NFTCreateForm(props: NFTCreateFormProps): React.ReactElement;
