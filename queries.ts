/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getApp = /* GraphQL */ `query GetApp($id: ID!) {
  getApp(id: $id) {
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
` as GeneratedQuery<APITypes.GetAppQueryVariables, APITypes.GetAppQuery>;
export const getMedia = /* GraphQL */ `query GetMedia($id: ID!) {
  getMedia(id: $id) {
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
` as GeneratedQuery<APITypes.GetMediaQueryVariables, APITypes.GetMediaQuery>;
export const getSale = /* GraphQL */ `query GetSale($id: ID!) {
  getSale(id: $id) {
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
` as GeneratedQuery<APITypes.GetSaleQueryVariables, APITypes.GetSaleQuery>;
export const getTask = /* GraphQL */ `query GetTask($id: ID!) {
  getTask(id: $id) {
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
` as GeneratedQuery<APITypes.GetTaskQueryVariables, APITypes.GetTaskQuery>;
export const listApps = /* GraphQL */ `query ListApps($filter: ModelAppFilterInput, $limit: Int, $nextToken: String) {
  listApps(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListAppsQueryVariables, APITypes.ListAppsQuery>;
export const listMedia = /* GraphQL */ `query ListMedia(
  $filter: ModelMediaFilterInput
  $limit: Int
  $nextToken: String
) {
  listMedia(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListMediaQueryVariables, APITypes.ListMediaQuery>;
export const listSales = /* GraphQL */ `query ListSales(
  $filter: ModelSaleFilterInput
  $limit: Int
  $nextToken: String
) {
  listSales(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListSalesQueryVariables, APITypes.ListSalesQuery>;
export const listTasks = /* GraphQL */ `query ListTasks(
  $filter: ModelTaskFilterInput
  $limit: Int
  $nextToken: String
) {
  listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTasksQueryVariables, APITypes.ListTasksQuery>;
