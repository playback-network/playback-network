import type { DynamoDBStreamHandler } from 'aws-lambda';
import { Logger } from '@aws-lambda-powertools/logger';

// const env = {
//   AWS_REGION: process.env.AWS_REGION,
//   AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
//   AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
//   AWS_SESSION_TOKEN: process.env.AWS_SESSION_TOKEN,
//   GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
// };

const logger = new Logger({
  logLevel: 'INFO',
  serviceName: 'dynamodb-stream-handler',
});

/**
 * Galadriel Lambda is implemented as a the DynamoDB Stream.
 * It runs on updates on the Task table,
 * to collect and prepares data in a Tx to send to Galadriel network
 * @param event
 * @returns
 */
export const handler: DynamoDBStreamHandler = async (event) => {
  console.log('event', event);

  for (const record of event.Records) {
    logger.info(`Processing record: ${record.eventID}`);
    logger.info(`Event Type: ${record.eventName}`);

    if (record.eventName === 'INSERT') {
      // business logic to process new records
      logger.info(`New Image: ${JSON.stringify(record.dynamodb?.NewImage)}`);
    }
  }
  logger.info(`Successfully processed ${event.Records.length} records.`);

  return {
    batchItemFailures: [],
  };
};
