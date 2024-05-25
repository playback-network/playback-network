import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type SaleCreateFormInputValues = {
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
    createdAt?: number;
};
export declare type SaleCreateFormValidationValues = {
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
    createdAt?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SaleCreateFormOverridesProps = {
    SaleCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type SaleCreateFormProps = React.PropsWithChildren<{
    overrides?: SaleCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SaleCreateFormInputValues) => SaleCreateFormInputValues;
    onSuccess?: (fields: SaleCreateFormInputValues) => void;
    onError?: (fields: SaleCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SaleCreateFormInputValues) => SaleCreateFormInputValues;
    onValidate?: SaleCreateFormValidationValues;
} & React.CSSProperties>;
export default function SaleCreateForm(props: SaleCreateFormProps): React.ReactElement;
