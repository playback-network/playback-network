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
    s3address?: string;
    fileName?: string;
    sizeMb?: number;
};
export declare type MediaUpdateFormValidationValues = {
    walletAddress?: ValidationFunction<string>;
    taskId?: ValidationFunction<string>;
    s3address?: ValidationFunction<string>;
    fileName?: ValidationFunction<string>;
    sizeMb?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MediaUpdateFormOverridesProps = {
    MediaUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    walletAddress?: PrimitiveOverrideProps<TextFieldProps>;
    taskId?: PrimitiveOverrideProps<TextFieldProps>;
    s3address?: PrimitiveOverrideProps<TextFieldProps>;
    fileName?: PrimitiveOverrideProps<TextFieldProps>;
    sizeMb?: PrimitiveOverrideProps<TextFieldProps>;
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
