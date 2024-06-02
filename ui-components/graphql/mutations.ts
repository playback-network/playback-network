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
      fileName
      id
      s3address
      sizeMb
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
      dataPayload
      description
      difficulty
      id
      mediaId
      name
      price
      updatedAt
      walletAddress
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
      dataPayload
      description
      difficulty
      id
      mediaId
      name
      price
      updatedAt
      walletAddress
      __typename
    }
  }
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
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
      fileName
      id
      s3address
      sizeMb
      taskId
      updatedAt
      walletAddress
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
      dataPayload
      description
      difficulty
      id
      mediaId
      name
      price
      updatedAt
      walletAddress
      __typename
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
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
      fileName
      id
      s3address
      sizeMb
      taskId
      updatedAt
      walletAddress
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
      dataPayload
      description
      difficulty
      id
      mediaId
      name
      price
      updatedAt
      walletAddress
      __typename
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
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
`;
