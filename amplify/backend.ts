import { defineBackend } from '@aws-amplify/backend';
import { EventSourceMapping, StartingPosition } from 'aws-cdk-lib/aws-lambda';
// import { DynamoEventSource } from 'aws-cdk-lib/aws-lambda-event-sources';
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

// DynamoDB Streams docs has an issue
// https://docs.amplify.aws/react/build-a-backend/functions/examples/dynamo-db-stream/
// Known issue: Fix when the issue has been solved.
// https://github.com/aws-amplify/amplify-category-api/issues/2554#issue-2293165077
// const eventSource = new DynamoEventSource(
//   backend.data.resources.tables['Task'],
//   {
//     startingPosition: StartingPosition.LATEST,
//   }
// );
// backend.myDynamoDBFunction.resources.lambda.addEventSource(eventSource);

// Temp workaround:
// https://github.com/aws-amplify/amplify-category-api/issues/2554#issuecomment-2140732707

const taskTable = backend.data.resources.tables['Task'];

new EventSourceMapping(Stack.of(taskTable), 'dynamoDB-function', {
  target: backend.myDynamoDBFunction.resources.lambda,
  eventSourceArn: taskTable.tableStreamArn,
  startingPosition: StartingPosition.LATEST,
});

backend.myDynamoDBFunction.resources.lambda.role?.attachInlinePolicy(
  new Policy(Stack.of(taskTable), 'DynamoDBPolicy', {
    statements: [
      new PolicyStatement({
        effect: Effect.ALLOW,
        actions: [
          'dynamodb:DescribeStream',
          'dynamodb:GetRecords',
          'dynamodb:GetShardIterator',
          'dynamodb:ListStreams',
        ],
        resources: [backend.data.resources.tables['Task'].tableArn],
      }),
    ],
  })
);

new EventSourceMapping(
  Stack.of(taskTable),
  "dynamoDB-function",
  {
      target: backend.myDynamoDBFunction.resources.lambda,
      eventSourceArn: taskTable.tableStreamArn,
      startingPosition: StartingPosition.LATEST,
  }
);