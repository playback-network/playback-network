/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

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
` as GeneratedMutation<
  APITypes.CreateMediasMutationVariables,
  APITypes.CreateMediasMutation
>;
export const createTask = /* GraphQL */ `mutation CreateTask(
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
` as GeneratedMutation<
  APITypes.DeleteMediaMutationVariables,
  APITypes.DeleteMediaMutation
>;
export const deleteTask = /* GraphQL */ `mutation DeleteTask(
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
` as GeneratedMutation<
  APITypes.UpdateMediaMutationVariables,
  APITypes.UpdateMediaMutation
>;
export const updateTask = /* GraphQL */ `mutation UpdateTask(
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
