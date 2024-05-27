import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { NFT } from "./graphql/types";
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
export declare type NFTUpdateFormInputValues = {
    ownersWallet?: string;
    blockAddress?: string;
    cid?: string;
    sizeGb?: number;
    metadata?: string;
    price?: number;
    createdAt?: string;
};
export declare type NFTUpdateFormValidationValues = {
    ownersWallet?: ValidationFunction<string>;
    blockAddress?: ValidationFunction<string>;
    cid?: ValidationFunction<string>;
    sizeGb?: ValidationFunction<number>;
    metadata?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    createdAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NFTUpdateFormOverridesProps = {
    NFTUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ownersWallet?: PrimitiveOverrideProps<TextFieldProps>;
    blockAddress?: PrimitiveOverrideProps<TextFieldProps>;
    cid?: PrimitiveOverrideProps<TextFieldProps>;
    sizeGb?: PrimitiveOverrideProps<TextFieldProps>;
    metadata?: PrimitiveOverrideProps<TextAreaFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NFTUpdateFormProps = React.PropsWithChildren<{
    overrides?: NFTUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    nFT?: NFT;
    onSubmit?: (fields: NFTUpdateFormInputValues) => NFTUpdateFormInputValues;
    onSuccess?: (fields: NFTUpdateFormInputValues) => void;
    onError?: (fields: NFTUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NFTUpdateFormInputValues) => NFTUpdateFormInputValues;
    onValidate?: NFTUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NFTUpdateForm(props: NFTUpdateFormProps): React.ReactElement;
