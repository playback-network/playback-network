/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createAIModel = /* GraphQL */ `mutation CreateAIModel(
  $condition: ModelAIModelConditionInput
  $input: CreateAIModelInput!
) {
  createAIModel(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateAIModelMutationVariables,
  APITypes.CreateAIModelMutation
>;
export const createAccount = /* GraphQL */ `mutation CreateAccount(
  $condition: ModelAccountConditionInput
  $input: CreateAccountInput!
) {
  createAccount(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateAccountMutationVariables,
  APITypes.CreateAccountMutation
>;
export const createApp = /* GraphQL */ `mutation CreateApp(
  $condition: ModelAppConditionInput
  $input: CreateAppInput!
) {
  createApp(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateAppMutationVariables,
  APITypes.CreateAppMutation
>;
export const createMedia = /* GraphQL */ `mutation CreateMedia(
  $condition: ModelMediaConditionInput
  $input: CreateMediaInput!
) {
  createMedia(condition: $condition, input: $input) {
    createdAt
    dataURL
    id
    ocr
    taskId
    updatedAt
    walletAddress
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMediaMutationVariables,
  APITypes.CreateMediaMutation
>;
export const createMedias = /* GraphQL */ `mutation CreateMedias(
  $frames: AWSJSON
  $taskId: String
  $walletAddress: String
) {
  createMedias(
    frames: $frames
    taskId: $taskId
    walletAddress: $walletAddress
  ) {
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
` as GeneratedMutation<
  APITypes.CreateMediasMutationVariables,
  APITypes.CreateMediasMutation
>;
export const createNFT = /* GraphQL */ `mutation CreateNFT(
  $condition: ModelNFTConditionInput
  $input: CreateNFTInput!
) {
  createNFT(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateNFTMutationVariables,
  APITypes.CreateNFTMutation
>;
export const createSale = /* GraphQL */ `mutation CreateSale(
  $condition: ModelSaleConditionInput
  $input: CreateSaleInput!
) {
  createSale(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateSaleMutationVariables,
  APITypes.CreateSaleMutation
>;
export const createTask = /* GraphQL */ `mutation CreateTask(
  $condition: ModelTaskConditionInput
  $input: CreateTaskInput!
) {
  createTask(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateTaskMutationVariables,
  APITypes.CreateTaskMutation
>;
export const createTodo = /* GraphQL */ `mutation CreateTodo(
  $condition: ModelTodoConditionInput
  $input: CreateTodoInput!
) {
  createTodo(condition: $condition, input: $input) {
    content
    createdAt
    id
    isDone
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTodoMutationVariables,
  APITypes.CreateTodoMutation
>;
export const deleteAIModel = /* GraphQL */ `mutation DeleteAIModel(
  $condition: ModelAIModelConditionInput
  $input: DeleteAIModelInput!
) {
  deleteAIModel(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteAIModelMutationVariables,
  APITypes.DeleteAIModelMutation
>;
export const deleteAccount = /* GraphQL */ `mutation DeleteAccount(
  $condition: ModelAccountConditionInput
  $input: DeleteAccountInput!
) {
  deleteAccount(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteAccountMutationVariables,
  APITypes.DeleteAccountMutation
>;
export const deleteApp = /* GraphQL */ `mutation DeleteApp(
  $condition: ModelAppConditionInput
  $input: DeleteAppInput!
) {
  deleteApp(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteAppMutationVariables,
  APITypes.DeleteAppMutation
>;
export const deleteMedia = /* GraphQL */ `mutation DeleteMedia(
  $condition: ModelMediaConditionInput
  $input: DeleteMediaInput!
) {
  deleteMedia(condition: $condition, input: $input) {
    createdAt
    dataURL
    id
    ocr
    taskId
    updatedAt
    walletAddress
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMediaMutationVariables,
  APITypes.DeleteMediaMutation
>;
export const deleteNFT = /* GraphQL */ `mutation DeleteNFT(
  $condition: ModelNFTConditionInput
  $input: DeleteNFTInput!
) {
  deleteNFT(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteNFTMutationVariables,
  APITypes.DeleteNFTMutation
>;
export const deleteSale = /* GraphQL */ `mutation DeleteSale(
  $condition: ModelSaleConditionInput
  $input: DeleteSaleInput!
) {
  deleteSale(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteSaleMutationVariables,
  APITypes.DeleteSaleMutation
>;
export const deleteTask = /* GraphQL */ `mutation DeleteTask(
  $condition: ModelTaskConditionInput
  $input: DeleteTaskInput!
) {
  deleteTask(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteTaskMutationVariables,
  APITypes.DeleteTaskMutation
>;
export const deleteTodo = /* GraphQL */ `mutation DeleteTodo(
  $condition: ModelTodoConditionInput
  $input: DeleteTodoInput!
) {
  deleteTodo(condition: $condition, input: $input) {
    content
    createdAt
    id
    isDone
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTodoMutationVariables,
  APITypes.DeleteTodoMutation
>;
export const updateAIModel = /* GraphQL */ `mutation UpdateAIModel(
  $condition: ModelAIModelConditionInput
  $input: UpdateAIModelInput!
) {
  updateAIModel(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateAIModelMutationVariables,
  APITypes.UpdateAIModelMutation
>;
export const updateAccount = /* GraphQL */ `mutation UpdateAccount(
  $condition: ModelAccountConditionInput
  $input: UpdateAccountInput!
) {
  updateAccount(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateAccountMutationVariables,
  APITypes.UpdateAccountMutation
>;
export const updateApp = /* GraphQL */ `mutation UpdateApp(
  $condition: ModelAppConditionInput
  $input: UpdateAppInput!
) {
  updateApp(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateAppMutationVariables,
  APITypes.UpdateAppMutation
>;
export const updateMedia = /* GraphQL */ `mutation UpdateMedia(
  $condition: ModelMediaConditionInput
  $input: UpdateMediaInput!
) {
  updateMedia(condition: $condition, input: $input) {
    createdAt
    dataURL
    id
    ocr
    taskId
    updatedAt
    walletAddress
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMediaMutationVariables,
  APITypes.UpdateMediaMutation
>;
export const updateNFT = /* GraphQL */ `mutation UpdateNFT(
  $condition: ModelNFTConditionInput
  $input: UpdateNFTInput!
) {
  updateNFT(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateNFTMutationVariables,
  APITypes.UpdateNFTMutation
>;
export const updateSale = /* GraphQL */ `mutation UpdateSale(
  $condition: ModelSaleConditionInput
  $input: UpdateSaleInput!
) {
  updateSale(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateSaleMutationVariables,
  APITypes.UpdateSaleMutation
>;
export const updateTask = /* GraphQL */ `mutation UpdateTask(
  $condition: ModelTaskConditionInput
  $input: UpdateTaskInput!
) {
  updateTask(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateTaskMutationVariables,
  APITypes.UpdateTaskMutation
>;
export const updateTodo = /* GraphQL */ `mutation UpdateTodo(
  $condition: ModelTodoConditionInput
  $input: UpdateTodoInput!
) {
  updateTodo(condition: $condition, input: $input) {
    content
    createdAt
    id
    isDone
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTodoMutationVariables,
  APITypes.UpdateTodoMutation
>;
