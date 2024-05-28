import { defineBackend } from '@aws-amplify/backend';
import { Stack } from 'aws-cdk-lib';
import {
  AuthorizationType,
  Cors,
  LambdaIntegration,
  RestApi,
} from 'aws-cdk-lib/aws-apigateway';
import { myApiFunction } from './functions/api-function/resource';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { storage } from './storage/resource';

const backend = defineBackend({
  auth,
  data,
  myApiFunction,
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

// create a new Lambda integration
const lambdaIntegration = new LambdaIntegration(
  backend.myApiFunction.resources.lambda
);

// create a new resource path with IAM authorization
const itemsPath = myRestApi.root.addResource('Todo', {
  defaultMethodOptions: {
    authorizationType: AuthorizationType.NONE,
  },
});

// add methods you would like to create to the resource path
itemsPath.addMethod('GET', lambdaIntegration);
itemsPath.addMethod('POST', lambdaIntegration);
itemsPath.addMethod('DELETE', lambdaIntegration);
itemsPath.addMethod('PUT', lambdaIntegration);

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
