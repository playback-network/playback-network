import type { Schema } from '../resource';
import { generateClient } from 'aws-amplify/data';

const client = generateClient<Schema>();
import type { Handler } from 'aws-lambda';

interface Frame {
  id: string;
  dataURL: string;
  OCR_TEXT?: string;
}

interface EventArguments {
  walletAddress: string;
  taskId: string;
  frames: Frame[];
}

export const handler: Handler<{ arguments: EventArguments }, any> = async (
  event,
  context
) => {
  const start = performance.now();
  const { walletAddress, taskId, frames: medias } = event.arguments;

  if (!medias || medias.length === 0) {
    throw new Error('Something went wrong saving medias');
  }

  if (taskId && walletAddress) {
    const task = { id: taskId, walletAddress: walletAddress };
    const { data: updatedTask, errors: taskUpdateErrors } =
      await client.models.Task.update(task);

    let errors: any[] = [];
    for (const media of medias) {
      const { errors: mediaUpdateErrors } = await client.models.Media.update(
        media
      );
      if (mediaUpdateErrors) {
        errors.push(mediaUpdateErrors);
      }
    }

    if (taskUpdateErrors || errors.length > 0) {
      return {
        message: `Something went wrong updating the Task ${taskId} with ${walletAddress}`,
        status: 500,
        errors: [taskUpdateErrors, ...errors].filter(Boolean),
      };
    }

    // Success response
    const executionDuration = performance.now() - start;
    return {
      content: updatedTask,
      message: `Task assigned to walletAddress: ${updatedTask?.walletAddress}`,
      id: taskId,
      updatedAt: new Date().toISOString(),
      executionDuration: executionDuration.toString(),
    };
  }

  return {
    message: `Update Task mutation needs parameters ${taskId} and ${walletAddress}`,
    status: 400,
  };
};
