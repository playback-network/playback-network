/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getAIModel = /* GraphQL */ `query GetAIModel($id: ID!) {
  getAIModel(id: $id) {
    accuracy
    app
    createdAt
    description
    id
    name
    ownersWallet
    price
    published
    serialisedConfig
    status
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAIModelQueryVariables,
  APITypes.GetAIModelQuery
>;
export const getAccount = /* GraphQL */ `query GetAccount($id: ID!) {
  getAccount(id: $id) {
    balance
    createdAt
    id
    medias
    nftAddresses
    updatedAt
    verified
    walletAddress
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAccountQueryVariables,
  APITypes.GetAccountQuery
>;
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
export const getNFT = /* GraphQL */ `query GetNFT($id: ID!) {
  getNFT(id: $id) {
    blockAddress
    cid
    createdAt
    id
    metadata
    ownersWallet
    price
    sizeGb
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetNFTQueryVariables, APITypes.GetNFTQuery>;
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
export const getTodo = /* GraphQL */ `query GetTodo($id: ID!) {
  getTodo(id: $id) {
    content
    createdAt
    id
    isDone
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTodoQueryVariables, APITypes.GetTodoQuery>;
export const listAIModels = /* GraphQL */ `query ListAIModels(
  $filter: ModelAIModelFilterInput
  $limit: Int
  $nextToken: String
) {
  listAIModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      accuracy
      app
      createdAt
      description
      id
      name
      ownersWallet
      price
      published
      serialisedConfig
      status
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAIModelsQueryVariables,
  APITypes.ListAIModelsQuery
>;
export const listAccounts = /* GraphQL */ `query ListAccounts(
  $filter: ModelAccountFilterInput
  $limit: Int
  $nextToken: String
) {
  listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      balance
      createdAt
      id
      medias
      nftAddresses
      updatedAt
      verified
      walletAddress
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAccountsQueryVariables,
  APITypes.ListAccountsQuery
>;
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
export const listNFTS = /* GraphQL */ `query ListNFTS($filter: ModelNFTFilterInput, $limit: Int, $nextToken: String) {
  listNFTS(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      blockAddress
      cid
      createdAt
      id
      metadata
      ownersWallet
      price
      sizeGb
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListNFTSQueryVariables, APITypes.ListNFTSQuery>;
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
export const listTodos = /* GraphQL */ `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      content
      createdAt
      id
      isDone
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTodosQueryVariables, APITypes.ListTodosQuery>;
