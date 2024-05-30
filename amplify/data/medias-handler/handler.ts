import { Amplify } from 'aws-amplify';
import { Schema } from '../resource';
import { generateClient } from 'aws-amplify/data';
import type { Handler } from 'aws-lambda';
import { env } from '$amplify/env/medias-handler';

Amplify.configure(
  {
    API: {
      GraphQL: {
        endpoint: env.data.GRAPHQL_ENDPOINT, // replace with your defineData name
        region: env.AWS_REGION,
        defaultAuthMode: 'identityPool',
      },
    },
  },
  {
    Auth: {
      credentialsProvider: {
        getCredentialsAndIdentityId: async () => ({
          credentials: {
            accessKeyId: env.AWS_ACCESS_KEY_ID,
            secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
            sessionToken: env.AWS_SESSION_TOKEN,
          },
        }),
        clearCredentialsAndIdentityId: () => {
          /* noop */
        },
      },
    },
  }
);

const client = generateClient<Schema>();

export const handler: Handler = async (event, context) => {
  try {
    const start = performance.now();
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
        return {
          statusCode: 500,
          body: JSON.stringify({
            message: `Something went wrong updating the Task ${taskId} with ${walletAddress}`,
            errors: [taskUpdateErrors, ...errors].filter(Boolean),
          }),
        };
      }

      const executionDuration = performance.now() - start;
      return {
        statusCode: 200,
        body: JSON.stringify({
          content: updatedTask,
          message: `Task assigned to walletAddress: ${updatedTask?.walletAddress}`,
          id: taskId,
          updatedAt: new Date().toISOString(),
          executionDuration: executionDuration.toString(),
        }),
      };
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: `Update Task mutation needs parameters ${taskId} and ${walletAddress}`,
        }),
      };
    }
  } catch (error: any) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Internal Server Error',
        error: error.message,
      }),
    };
  }
};
