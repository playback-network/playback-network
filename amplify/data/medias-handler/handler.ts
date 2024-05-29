import type { Schema } from '../resource';
import { generateClient } from 'aws-amplify/data';

const client = generateClient<Schema>();

export const handler: Schema['createMedias']['functionHandler'] = async (
  event,
  context
) => {
  /*TODO: map frames to medias and save them 
{  "walletAddress": "0xYourWalletAddress", 
   "taskID": "12345",
  "frames": [
    {
       "id": "1",
       "dataURL": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD...",
       "OCR_TEXT": "ASNDASJFKAF",
    },
    {
      "id": "2",
      "dataURL": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
    },
    {
      "id": "3",
      "dataURL": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
    }
  ]
} 
  */

  const start = performance.now();
  const walletAddress = event.arguments?.walletAddress;
  const taskId = event.arguments?.taskId;

  const emptyTask = {
    id: '0',
    createdAt: 'error',
    updatedAt: 'error',
    mediaId: '',
    status: '',
    walletAddress: '',
    medias: '',
    name: '',
    description: '',
    difficulty: 0,
    app: '',
    appImage: '',
  };

  if (taskId && walletAddress) {
    const task = { id: taskId, walletAddress: walletAddress };
    const { data: updatedTask, errors: taskUpdateErrors } =
      await client.models.Task.update(task);

    const medias = event.arguments?.frames;
    let errors = { taskUpdateErrors };
    if (Array.isArray(medias)) {
      for (const media of medias) {
        const { errors: mediaUpdateErrors } = await client.models.Media.update(
          media
        );
        errors = { ...mediaUpdateErrors, ...errors };
      }
    }

    if (errors) {
      return emptyTask;
    }

    //success response
    return updatedTask;
  }
  return emptyTask;
};
