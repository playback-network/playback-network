import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Media } from "./graphql/types";
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
export declare type MediaUpdateFormInputValues = {
    walletAddress?: string;
    taskId?: string;
    dataURL?: string;
    ocr?: string;
    price?: number;
    createdAt?: string;
};
export declare type MediaUpdateFormValidationValues = {
    walletAddress?: ValidationFunction<string>;
    taskId?: ValidationFunction<string>;
    dataURL?: ValidationFunction<string>;
    ocr?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    createdAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MediaUpdateFormOverridesProps = {
    MediaUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    walletAddress?: PrimitiveOverrideProps<TextFieldProps>;
    taskId?: PrimitiveOverrideProps<TextFieldProps>;
    dataURL?: PrimitiveOverrideProps<TextFieldProps>;
    ocr?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MediaUpdateFormProps = React.PropsWithChildren<{
    overrides?: MediaUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    media?: Media;
    onSubmit?: (fields: MediaUpdateFormInputValues) => MediaUpdateFormInputValues;
    onSuccess?: (fields: MediaUpdateFormInputValues) => void;
    onError?: (fields: MediaUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MediaUpdateFormInputValues) => MediaUpdateFormInputValues;
    onValidate?: MediaUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MediaUpdateForm(props: MediaUpdateFormProps): React.ReactElement;
