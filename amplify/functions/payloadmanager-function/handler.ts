import type { APIGatewayProxyHandler } from 'aws-lambda';

const env = {
  AWS_REGION: process.env.AWS_REGION,
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  AWS_SESSION_TOKEN: process.env.AWS_SESSION_TOKEN,
  GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
};

export const handler: APIGatewayProxyHandler = async (event) => {
  // console.log('event', event);
  //Our code logic here

  return {
    statusCode: 200,
    // Modify the CORS settings below to match your specific requirements
    headers: {
      'Access-Control-Allow-Origin': '*', // Restrict this to domains you trust
      'Access-Control-Allow-Headers': '*', // Specify only the headers you need to allow
    },
    body: JSON.stringify('Hello from PayloadManager Function!'),
  };
};
