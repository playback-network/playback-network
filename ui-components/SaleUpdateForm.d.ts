import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Sale } from "./graphql/types";
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
export declare type SaleUpdateFormInputValues = {
    taskId?: string;
    aiModelId?: string;
    priceListed?: number;
    pricePaid?: number;
    isAuction?: boolean;
    app?: string;
    sellerssWallet?: string;
    buyersWallet?: string;
    transactionLedgerId?: string;
    status?: string;
    published?: boolean;
    createdAt?: string;
};
export declare type SaleUpdateFormValidationValues = {
    taskId?: ValidationFunction<string>;
    aiModelId?: ValidationFunction<string>;
    priceListed?: ValidationFunction<number>;
    pricePaid?: ValidationFunction<number>;
    isAuction?: ValidationFunction<boolean>;
    app?: ValidationFunction<string>;
    sellerssWallet?: ValidationFunction<string>;
    buyersWallet?: ValidationFunction<string>;
    transactionLedgerId?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    published?: ValidationFunction<boolean>;
    createdAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SaleUpdateFormOverridesProps = {
    SaleUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    taskId?: PrimitiveOverrideProps<TextFieldProps>;
    aiModelId?: PrimitiveOverrideProps<TextFieldProps>;
    priceListed?: PrimitiveOverrideProps<TextFieldProps>;
    pricePaid?: PrimitiveOverrideProps<TextFieldProps>;
    isAuction?: PrimitiveOverrideProps<SwitchFieldProps>;
    app?: PrimitiveOverrideProps<TextFieldProps>;
    sellerssWallet?: PrimitiveOverrideProps<TextFieldProps>;
    buyersWallet?: PrimitiveOverrideProps<TextFieldProps>;
    transactionLedgerId?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    published?: PrimitiveOverrideProps<SwitchFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SaleUpdateFormProps = React.PropsWithChildren<{
    overrides?: SaleUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    sale?: Sale;
    onSubmit?: (fields: SaleUpdateFormInputValues) => SaleUpdateFormInputValues;
    onSuccess?: (fields: SaleUpdateFormInputValues) => void;
    onError?: (fields: SaleUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SaleUpdateFormInputValues) => SaleUpdateFormInputValues;
    onValidate?: SaleUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SaleUpdateForm(props: SaleUpdateFormProps): React.ReactElement;
