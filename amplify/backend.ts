import { defineBackend } from '@aws-amplify/backend';
import { Stack } from 'aws-cdk-lib';
import {
  AuthorizationType,
  Cors,
  LambdaIntegration,
  RestApi,
} from 'aws-cdk-lib/aws-apigateway';
import { myApiFunction } from './functions/api-function/resource';
import { galadrielFunction } from './functions/galadriel-function/resource';
import { payloadmanagerFunction } from './functions/payloadmanager-function/resource';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { storage } from './storage/resource';

const backend = defineBackend({
  auth,
  data,
  myApiFunction,
  galadrielFunction,
  payloadmanagerFunction,
  storage,
});

// create a new API stack
const apiStack = backend.createStack('api-stack');

// create a new REST API
const myRestApi = new RestApi(apiStack, 'RestApi', {
  restApiName: 'myRestApi',
  deploy: true,
  defaultCorsPreflightOptions: {
    allowOrigins: Cors.ALL_ORIGINS, // Restrict this to domains you trust
    allowMethods: Cors.ALL_METHODS, // Specify only the methods you need to allow
    allowHeaders: Cors.DEFAULT_HEADERS, // Specify only the headers you need to allow
  },
});

// FOR myApiFunction:
// create a new Lambda integration for myApiFunction
const lambdaIntegration = new LambdaIntegration(
  backend.myApiFunction.resources.lambda
);

// create a new resource path with IAM authorization
const todosPath = myRestApi.root.addResource('Todo', {
  defaultMethodOptions: {
    authorizationType: AuthorizationType.NONE,
  },
});

// add methods you would like to create to the resource path
todosPath.addMethod('GET', lambdaIntegration);
todosPath.addMethod('POST', lambdaIntegration);
todosPath.addMethod('DELETE', lambdaIntegration);
todosPath.addMethod('PUT', lambdaIntegration);

const accountPath = myRestApi.root.addResource('Account', {
  defaultMethodOptions: {
    authorizationType: AuthorizationType.NONE,
  },
});

// add methods you would like to create to the resource path
accountPath.addMethod('GET', lambdaIntegration);
accountPath.addMethod('POST', lambdaIntegration);
accountPath.addMethod('DELETE', lambdaIntegration);
accountPath.addMethod('PUT', lambdaIntegration);

const taskPath = myRestApi.root.addResource('Task', {
  defaultMethodOptions: {
    authorizationType: AuthorizationType.NONE,
  },
});

// add methods you would like to create to the resource path
taskPath.addMethod('GET', lambdaIntegration);
taskPath.addMethod('POST', lambdaIntegration);
taskPath.addMethod('DELETE', lambdaIntegration);
taskPath.addMethod('PUT', lambdaIntegration);

const mediaPath = myRestApi.root.addResource('Media', {
  defaultMethodOptions: {
    authorizationType: AuthorizationType.NONE,
  },
});

// add methods you would like to create to the resource path
mediaPath.addMethod('GET', lambdaIntegration);
mediaPath.addMethod('POST', lambdaIntegration);
mediaPath.addMethod('DELETE', lambdaIntegration);
mediaPath.addMethod('PUT', lambdaIntegration);

// add outputs to the configuration file
backend.addOutput({
  custom: {
    API: {
      [myRestApi.restApiName]: {
        endpoint: myRestApi.url,
        region: Stack.of(myRestApi).region,
        apiName: myRestApi.restApiName,
      },
    },
  },
});
