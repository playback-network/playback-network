/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateAIModel = /* GraphQL */ `subscription OnCreateAIModel($filter: ModelSubscriptionAIModelFilterInput) {
  onCreateAIModel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAIModelSubscriptionVariables,
  APITypes.OnCreateAIModelSubscription
>;
export const onCreateAccount = /* GraphQL */ `subscription OnCreateAccount($filter: ModelSubscriptionAccountFilterInput) {
  onCreateAccount(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAccountSubscriptionVariables,
  APITypes.OnCreateAccountSubscription
>;
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
export const onCreateNFT = /* GraphQL */ `subscription OnCreateNFT($filter: ModelSubscriptionNFTFilterInput) {
  onCreateNFT(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateNFTSubscriptionVariables,
  APITypes.OnCreateNFTSubscription
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
export const onCreateTodo = /* GraphQL */ `subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onCreateTodo(filter: $filter) {
    content
    createdAt
    id
    isDone
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTodoSubscriptionVariables,
  APITypes.OnCreateTodoSubscription
>;
export const onDeleteAIModel = /* GraphQL */ `subscription OnDeleteAIModel($filter: ModelSubscriptionAIModelFilterInput) {
  onDeleteAIModel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAIModelSubscriptionVariables,
  APITypes.OnDeleteAIModelSubscription
>;
export const onDeleteAccount = /* GraphQL */ `subscription OnDeleteAccount($filter: ModelSubscriptionAccountFilterInput) {
  onDeleteAccount(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAccountSubscriptionVariables,
  APITypes.OnDeleteAccountSubscription
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
export const onDeleteNFT = /* GraphQL */ `subscription OnDeleteNFT($filter: ModelSubscriptionNFTFilterInput) {
  onDeleteNFT(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteNFTSubscriptionVariables,
  APITypes.OnDeleteNFTSubscription
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
export const onDeleteTodo = /* GraphQL */ `subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
  onDeleteTodo(filter: $filter) {
    content
    createdAt
    id
    isDone
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTodoSubscriptionVariables,
  APITypes.OnDeleteTodoSubscription
>;
export const onUpdateAIModel = /* GraphQL */ `subscription OnUpdateAIModel($filter: ModelSubscriptionAIModelFilterInput) {
  onUpdateAIModel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAIModelSubscriptionVariables,
  APITypes.OnUpdateAIModelSubscription
>;
export const onUpdateAccount = /* GraphQL */ `subscription OnUpdateAccount($filter: ModelSubscriptionAccountFilterInput) {
  onUpdateAccount(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAccountSubscriptionVariables,
  APITypes.OnUpdateAccountSubscription
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
export const onUpdateNFT = /* GraphQL */ `subscription OnUpdateNFT($filter: ModelSubscriptionNFTFilterInput) {
  onUpdateNFT(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateNFTSubscriptionVariables,
  APITypes.OnUpdateNFTSubscription
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
export const onUpdateTodo = /* GraphQL */ `subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onUpdateTodo(filter: $filter) {
    content
    createdAt
    id
    isDone
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTodoSubscriptionVariables,
  APITypes.OnUpdateTodoSubscription
>;
