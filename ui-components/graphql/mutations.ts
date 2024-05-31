/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createApp = /* GraphQL */ `
  mutation CreateApp(
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
`;
export const createMedia = /* GraphQL */ `
  mutation CreateMedia(
    $condition: ModelMediaConditionInput
    $input: CreateMediaInput!
  ) {
    createMedia(condition: $condition, input: $input) {
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
export const createMedias = /* GraphQL */ `
  mutation CreateMedias(
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
`;
export const createSale = /* GraphQL */ `
  mutation CreateSale(
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
`;
export const createTask = /* GraphQL */ `
  mutation CreateTask(
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
`;
export const deleteApp = /* GraphQL */ `
  mutation DeleteApp(
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
`;
export const deleteMedia = /* GraphQL */ `
  mutation DeleteMedia(
    $condition: ModelMediaConditionInput
    $input: DeleteMediaInput!
  ) {
    deleteMedia(condition: $condition, input: $input) {
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
export const deleteSale = /* GraphQL */ `
  mutation DeleteSale(
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
`;
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
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
`;
export const updateApp = /* GraphQL */ `
  mutation UpdateApp(
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
`;
export const updateMedia = /* GraphQL */ `
  mutation UpdateMedia(
    $condition: ModelMediaConditionInput
    $input: UpdateMediaInput!
  ) {
    updateMedia(condition: $condition, input: $input) {
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
export const updateSale = /* GraphQL */ `
  mutation UpdateSale(
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
`;
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
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
`;
