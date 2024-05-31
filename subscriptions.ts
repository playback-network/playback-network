/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateApp = /* GraphQL */ `subscription OnCreateApp($filter: ModelSubscriptionAppFilterInput) {
  onCreateApp(filter: $filter) {
    createdAt
    description
    id
    name
    published
    rank
    status
    tasks
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAppSubscriptionVariables,
  APITypes.OnCreateAppSubscription
>;
export const onCreateMedia = /* GraphQL */ `subscription OnCreateMedia($filter: ModelSubscriptionMediaFilterInput) {
  onCreateMedia(filter: $filter) {
    createdAt
    dataURL
    id
    ocr
    price
    taskId
    updatedAt
    walletAddress
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMediaSubscriptionVariables,
  APITypes.OnCreateMediaSubscription
>;
export const onCreateSale = /* GraphQL */ `subscription OnCreateSale($filter: ModelSubscriptionSaleFilterInput) {
  onCreateSale(filter: $filter) {
    aiModelId
    app
    buyersWallet
    createdAt
    id
    isAuction
    priceListed
    pricePaid
    published
    sellerssWallet
    status
    taskId
    transactionLedgerId
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSaleSubscriptionVariables,
  APITypes.OnCreateSaleSubscription
>;
export const onCreateTask = /* GraphQL */ `subscription OnCreateTask($filter: ModelSubscriptionTaskFilterInput) {
  onCreateTask(filter: $filter) {
    app
    appImage
    createdAt
    description
    difficulty
    id
    mediaId
    medias
    name
    updatedAt
    walletAddress
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTaskSubscriptionVariables,
  APITypes.OnCreateTaskSubscription
>;
export const onDeleteApp = /* GraphQL */ `subscription OnDeleteApp($filter: ModelSubscriptionAppFilterInput) {
  onDeleteApp(filter: $filter) {
    createdAt
    description
    id
    name
    published
    rank
    status
    tasks
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAppSubscriptionVariables,
  APITypes.OnDeleteAppSubscription
>;
export const onDeleteMedia = /* GraphQL */ `subscription OnDeleteMedia($filter: ModelSubscriptionMediaFilterInput) {
  onDeleteMedia(filter: $filter) {
    createdAt
    dataURL
    id
    ocr
    price
    taskId
    updatedAt
    walletAddress
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMediaSubscriptionVariables,
  APITypes.OnDeleteMediaSubscription
>;
export const onDeleteSale = /* GraphQL */ `subscription OnDeleteSale($filter: ModelSubscriptionSaleFilterInput) {
  onDeleteSale(filter: $filter) {
    aiModelId
    app
    buyersWallet
    createdAt
    id
    isAuction
    priceListed
    pricePaid
    published
    sellerssWallet
    status
    taskId
    transactionLedgerId
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSaleSubscriptionVariables,
  APITypes.OnDeleteSaleSubscription
>;
export const onDeleteTask = /* GraphQL */ `subscription OnDeleteTask($filter: ModelSubscriptionTaskFilterInput) {
  onDeleteTask(filter: $filter) {
    app
    appImage
    createdAt
    description
    difficulty
    id
    mediaId
    medias
    name
    updatedAt
    walletAddress
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTaskSubscriptionVariables,
  APITypes.OnDeleteTaskSubscription
>;
export const onUpdateApp = /* GraphQL */ `subscription OnUpdateApp($filter: ModelSubscriptionAppFilterInput) {
  onUpdateApp(filter: $filter) {
    createdAt
    description
    id
    name
    published
    rank
    status
    tasks
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAppSubscriptionVariables,
  APITypes.OnUpdateAppSubscription
>;
export const onUpdateMedia = /* GraphQL */ `subscription OnUpdateMedia($filter: ModelSubscriptionMediaFilterInput) {
  onUpdateMedia(filter: $filter) {
    createdAt
    dataURL
    id
    ocr
    price
    taskId
    updatedAt
    walletAddress
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMediaSubscriptionVariables,
  APITypes.OnUpdateMediaSubscription
>;
export const onUpdateSale = /* GraphQL */ `subscription OnUpdateSale($filter: ModelSubscriptionSaleFilterInput) {
  onUpdateSale(filter: $filter) {
    aiModelId
    app
    buyersWallet
    createdAt
    id
    isAuction
    priceListed
    pricePaid
    published
    sellerssWallet
    status
    taskId
    transactionLedgerId
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSaleSubscriptionVariables,
  APITypes.OnUpdateSaleSubscription
>;
export const onUpdateTask = /* GraphQL */ `subscription OnUpdateTask($filter: ModelSubscriptionTaskFilterInput) {
  onUpdateTask(filter: $filter) {
    app
    appImage
    createdAt
    description
    difficulty
    id
    mediaId
    medias
    name
    updatedAt
    walletAddress
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTaskSubscriptionVariables,
  APITypes.OnUpdateTaskSubscription
>;
