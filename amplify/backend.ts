import { defineBackend } from '@aws-amplify/backend';
import { EventSourceMapping, StartingPosition } from 'aws-cdk-lib/aws-lambda';
import { DynamoEventSource } from 'aws-cdk-lib/aws-lambda-event-sources';
import { payloadmanagerFunction } from './functions/payloadmanager-function/resource';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { storage } from './storage/resource';
import { myDynamoDBFunction } from './functions/dynamoDB-function/resource';
import { Stack } from 'aws-cdk-lib';
import { Policy, PolicyStatement, Effect } from 'aws-cdk-lib/aws-iam';

const backend = defineBackend({
  storage,
  payloadmanagerFunction,
  myDynamoDBFunction,
  auth,
  data,
});

// const taskTable = backend.data.resources.tables['Task'];
// if (!taskTable.tableStreamArn) {
//   throw new Error('The DynamoDB table stream ARN is not defined');
// }

// backend.myDynamoDBFunction.resources.lambda.role?.attachInlinePolicy(
//   new Policy(Stack.of(taskTable), 'DynamoDBPolicy', {
//     statements: [
//       new PolicyStatement({
//         effect: Effect.ALLOW,
//         actions: [
//           'dynamodb:DescribeStream',
//           'dynamodb:GetRecords',
//           'dynamodb:GetShardIterator',
//           'dynamodb:ListStreams',
//         ],
//         resources: [taskTable.tableStreamArn], // Use tableStreamArn to specify the stream ARN
//       }),
//     ],
//   })
// );

// new EventSourceMapping(Stack.of(taskTable), 'DynamoDBEventSourceMapping', {
//   target: backend.myDynamoDBFunction.resources.lambda,
//   eventSourceArn: taskTable.tableStreamArn,
//   startingPosition: StartingPosition.LATEST,
// });
