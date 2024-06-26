import { Amplify } from 'aws-amplify';
import { Schema } from '../resource';
import { generateClient } from 'aws-amplify/data';
import type { Handler } from 'aws-lambda';

const env = {
  AWS_REGION: process.env.AWS_REGION,
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  AWS_SESSION_TOKEN: process.env.AWS_SESSION_TOKEN,
  GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
};

const client = generateClient<Schema>();

export const handler: Handler = async (event, context) => {
  try {
    const { walletAddress, taskId, frames } = JSON.parse(event.body);

    if (!frames || frames.length === 0) {
      throw new Error('Something went wrong saving medias');
    }

    if (taskId && walletAddress) {
      const task = { id: taskId, walletAddress: walletAddress };
      const { data: updatedTask, errors: taskUpdateErrors } =
        await client.models.Task.update(task);

      let errors: any[] = [];
      for (const media of frames) {
        const { errors: mediaUpdateErrors } = await client.models.Media.update(
          media
        );
        if (mediaUpdateErrors) {
          errors.push(mediaUpdateErrors);
        }
      }

      if (taskUpdateErrors || errors.length > 0) {
        return new Error('Internal Server Error');
      }

      return updatedTask;
    } else {
      throw new Error('Internal Server Error');
    }
  } catch (error: any) {
    console.error('Error:', error);
    throw new Error('Internal Server Error');
  }
};
