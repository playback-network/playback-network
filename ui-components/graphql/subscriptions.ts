/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAIModel = /* GraphQL */ `
  subscription OnCreateAIModel($filter: ModelSubscriptionAIModelFilterInput) {
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
`;
export const onCreateAccount = /* GraphQL */ `
  subscription OnCreateAccount($filter: ModelSubscriptionAccountFilterInput) {
    onCreateAccount(filter: $filter) {
      balance
      createdAt
      ens
      id
      nftAddresses
      updatedAt
      verified
      wallet
      __typename
    }
  }
`;
export const onCreateApp = /* GraphQL */ `
  subscription OnCreateApp($filter: ModelSubscriptionAppFilterInput) {
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
`;
export const onCreateMedia = /* GraphQL */ `
  subscription OnCreateMedia($filter: ModelSubscriptionMediaFilterInput) {
    onCreateMedia(filter: $filter) {
      createdAt
      description
      id
      ownersWallet
      sizeGb
      status
      type
      updatedAt
      __typename
    }
  }
`;
export const onCreateNFT = /* GraphQL */ `
  subscription OnCreateNFT($filter: ModelSubscriptionNFTFilterInput) {
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
`;
export const onCreateSale = /* GraphQL */ `
  subscription OnCreateSale($filter: ModelSubscriptionSaleFilterInput) {
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
`;
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask($filter: ModelSubscriptionTaskFilterInput) {
    onCreateTask(filter: $filter) {
      aiModelId
      apps
      createdAt
      description
      difficulty
      id
      mediaId
      name
      ownersWallet
      priceListed
      published
      status
      updatedAt
      __typename
    }
  }
`;
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
      content
      createdAt
      id
      isDone
      updatedAt
      __typename
    }
  }
`;
export const onDeleteAIModel = /* GraphQL */ `
  subscription OnDeleteAIModel($filter: ModelSubscriptionAIModelFilterInput) {
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
`;
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount($filter: ModelSubscriptionAccountFilterInput) {
    onDeleteAccount(filter: $filter) {
      balance
      createdAt
      ens
      id
      nftAddresses
      updatedAt
      verified
      wallet
      __typename
    }
  }
`;
export const onDeleteApp = /* GraphQL */ `
  subscription OnDeleteApp($filter: ModelSubscriptionAppFilterInput) {
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
`;
export const onDeleteMedia = /* GraphQL */ `
  subscription OnDeleteMedia($filter: ModelSubscriptionMediaFilterInput) {
    onDeleteMedia(filter: $filter) {
      createdAt
      description
      id
      ownersWallet
      sizeGb
      status
      type
      updatedAt
      __typename
    }
  }
`;
export const onDeleteNFT = /* GraphQL */ `
  subscription OnDeleteNFT($filter: ModelSubscriptionNFTFilterInput) {
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
`;
export const onDeleteSale = /* GraphQL */ `
  subscription OnDeleteSale($filter: ModelSubscriptionSaleFilterInput) {
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
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask($filter: ModelSubscriptionTaskFilterInput) {
    onDeleteTask(filter: $filter) {
      aiModelId
      apps
      createdAt
      description
      difficulty
      id
      mediaId
      name
      ownersWallet
      priceListed
      published
      status
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
      content
      createdAt
      id
      isDone
      updatedAt
      __typename
    }
  }
`;
export const onUpdateAIModel = /* GraphQL */ `
  subscription OnUpdateAIModel($filter: ModelSubscriptionAIModelFilterInput) {
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
`;
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount($filter: ModelSubscriptionAccountFilterInput) {
    onUpdateAccount(filter: $filter) {
      balance
      createdAt
      ens
      id
      nftAddresses
      updatedAt
      verified
      wallet
      __typename
    }
  }
`;
export const onUpdateApp = /* GraphQL */ `
  subscription OnUpdateApp($filter: ModelSubscriptionAppFilterInput) {
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
`;
export const onUpdateMedia = /* GraphQL */ `
  subscription OnUpdateMedia($filter: ModelSubscriptionMediaFilterInput) {
    onUpdateMedia(filter: $filter) {
      createdAt
      description
      id
      ownersWallet
      sizeGb
      status
      type
      updatedAt
      __typename
    }
  }
`;
export const onUpdateNFT = /* GraphQL */ `
  subscription OnUpdateNFT($filter: ModelSubscriptionNFTFilterInput) {
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
`;
export const onUpdateSale = /* GraphQL */ `
  subscription OnUpdateSale($filter: ModelSubscriptionSaleFilterInput) {
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
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask($filter: ModelSubscriptionTaskFilterInput) {
    onUpdateTask(filter: $filter) {
      aiModelId
      apps
      createdAt
      description
      difficulty
      id
      mediaId
      name
      ownersWallet
      priceListed
      published
      status
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
      content
      createdAt
      id
      isDone
      updatedAt
      __typename
    }
  }
`;
