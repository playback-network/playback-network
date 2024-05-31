/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
`;
