import { APIGatewayProxyHandler } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';
import { ethers } from 'ethers';

const dynamoDb = new DynamoDB.DocumentClient();
const tableName = process.env.TABLE_NAME || 'Task';

const privateKey =
  '0xcf038c8a292755cdd249ca744a1d8767339d91e271ad0cc78a3bc3b3b70d0f14';

async function sign(recipient: string, valuation: number) {
  const signer = new ethers.Wallet(privateKey);

  const message = ethers.solidityPackedKeccak256(
    ['uint256', 'address'],
    [valuation, recipient]
  );

  const dataPayload = await signer.signMessage(ethers.getBytes(message));

  return { dataPayload, valuation, recipient };
}

interface Event {
  taskId: string;
  recipientAddress: string;
  valuation: string;
}

export const handler: APIGatewayProxyHandler = async (event) => {
  const body: Event = JSON.parse(event.body || '{}');
  const { recipientAddress, valuation, taskId } = body;

  const numericValuation = parseFloat(valuation);

  if (numericValuation > 0) {
    const { dataPayload } = await sign(recipientAddress, numericValuation);

    try {
      const params = {
        TableName: tableName,
        Key: {
          id: taskId,
        },
        UpdateExpression: 'set dataPayload = :dp, price = :p',
        ExpressionAttributeValues: {
          ':dp': dataPayload,
          ':p': numericValuation,
        },
        ReturnValues: 'UPDATED_NEW',
      };

      await dynamoDb.update(params).promise();

      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Updated Task Table' }),
      };
    } catch (error) {
      console.error('Error updating task:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Error updating task' }),
      };
    }
  } else {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Valuation is zero, no task update required',
      }),
    };
  }
};
