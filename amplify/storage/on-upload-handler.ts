import { S3Handler } from 'aws-lambda';
import {
  S3Client,
  ListObjectsV2Command,
  GetObjectCommand,
} from '@aws-sdk/client-s3';
import { ethers } from 'ethers';
import { Readable } from 'stream';

// Placeholder ABI
const contractABI: any = [
  // Replace this with the actual ABI
  `[
    {
        "type": "constructor",
        "inputs": [
            {
                "name": "initialOracleAddress",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "manager",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "addMessage",
        "inputs": [
            {
                "name": "chatOwner",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "message",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "runId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "chatRuns",
        "inputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "owner",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "messagesCount",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "taskId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getMessageHistory",
        "inputs": [
            {
                "name": "chatId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "tuple[]",
                "internalType": "struct IOracle.Message[]",
                "components": [
                    {
                        "name": "role",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "content",
                        "type": "tuple[]",
                        "internalType": "struct IOracle.Content[]",
                        "components": [
                            {
                                "name": "contentType",
                                "type": "string",
                                "internalType": "string"
                            },
                            {
                                "name": "value",
                                "type": "string",
                                "internalType": "string"
                            }
                        ]
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "onOracleOpenAiLlmResponse",
        "inputs": [
            {
                "name": "runId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "response",
                "type": "tuple",
                "internalType": "struct IOracle.OpenAiResponse",
                "components": [
                    {
                        "name": "id",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "content",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "functionName",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "functionArguments",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "created",
                        "type": "uint64",
                        "internalType": "uint64"
                    },
                    {
                        "name": "model",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "systemFingerprint",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "object",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "completionTokens",
                        "type": "uint32",
                        "internalType": "uint32"
                    },
                    {
                        "name": "promptTokens",
                        "type": "uint32",
                        "internalType": "uint32"
                    },
                    {
                        "name": "totalTokens",
                        "type": "uint32",
                        "internalType": "uint32"
                    }
                ]
            },
            {
                "name": "errorMessage",
                "type": "string",
                "internalType": "string"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "oracleAddress",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "oracleManager",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "responses",
        "inputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "owner",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "success",
                "type": "bool",
                "internalType": "bool"
            },
            {
                "name": "response",
                "type": "string",
                "internalType": "string"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "setOracleAddress",
        "inputs": [
            {
                "name": "newOracleAddress",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setOracleManager",
        "inputs": [
            {
                "name": "newOracleManager",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "startChat",
        "inputs": [
            {
                "name": "chatOwner",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "taskId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "systemMessage",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "message",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "imageUrls",
                "type": "string[]",
                "internalType": "string[]"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "event",
        "name": "ChatCreated",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "chatId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "OracleAddressUpdated",
        "inputs": [
            {
                "name": "newOracleAddress",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "OracleManagerUpdated",
        "inputs": [
            {
                "name": "newOracleManager",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "ResponseReceived",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            },
            {
                "name": "taskId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "success",
                "type": "bool",
                "indexed": true,
                "internalType": "bool"
            },
            {
                "name": "response",
                "type": "string",
                "indexed": false,
                "internalType": "string"
            },
            {
                "name": "imageUrls",
                "type": "string[]",
                "indexed": false,
                "internalType": "string[]"
            }
        ],
        "anonymous": false
    }
]`,
];

const contractAddress = '0x2dC8Bc53ECf1A59188e4c7fAB0c7bB57339F85e7';
const privateKey =
  '0xe11dfd3f6a929f1e6e3374f19c15aa89d83d800cc5ce71ef5b385db78820d26e';

async function sendTransaction(
  recipient: string,
  systemMessage: string,
  message: string,
  imageUrls: string[]
) {
  const provider = new ethers.JsonRpcProvider('https://devnet.galadriel.com');
  const signer = new ethers.Wallet(privateKey, provider);

  const contract = new ethers.Contract(contractAddress, contractABI, signer);

  const tx = await contract.startChat(
    recipient,
    systemMessage,
    message,
    imageUrls
  );
  await tx.wait();

  console.log('Transaction Hash:', tx.hash);
}

async function getTaskNameFromFile(
  bucket: string,
  key: string
): Promise<string | undefined> {
  const s3Client = new S3Client({ region: 'ap-southeast-2' });
  const command = new GetObjectCommand({ Bucket: bucket, Key: key });

  try {
    const response = await s3Client.send(command);
    const stream = response.Body as Readable;
    const data = await streamToString(stream);
    // Assuming the file contains a JSON with a taskName field
    const json = JSON.parse(data);
    return json.taskName;
  } catch (error) {
    console.error('Error reading play.back file from S3:', error);
    return undefined;
  }
}

// Helper function to convert a stream to string
function streamToString(stream: Readable): Promise<string> {
  const chunks: Uint8Array[] = [];
  return new Promise((resolve, reject) => {
    stream.on('data', (chunk) => chunks.push(chunk));
    stream.on('error', reject);
    stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf-8')));
  });
}

export const handler: S3Handler = async (event) => {
  const objectKeys = event.Records.map((record) => record.s3.object.key);
  console.log('This funciton will prepare and send the startChat on Galadriel');
  console.log(`Upload handler invoked for objects [${objectKeys.join(', ')}]`);

  const s3Client = new S3Client({ region: 'ap-southeast-2' });

  for (const record of event.Records) {
    const bucket = record.s3.bucket.name;
    const key = record.s3.object.key;

    if (key.endsWith('/raw-images/play.back')) {
      console.log(`Processing file: ${key} in bucket: ${bucket}`);

      // Split key to extract vars
      const parts = key.split('/');
      // Extract walletAddress and taskId
      const walletAddress = parts[1];
      const taskId = parts[2];

      console.log(`walletAddress: ${walletAddress}, taskId: ${taskId}`);

      // Get task name from play.back file
      const taskName = await getTaskNameFromFile(bucket, key);
      if (!taskName) {
        console.error('Failed to get task name from play.back file');
        return;
      }
      console.log(`Task name: ${taskName}`);

      // List all objects in the folder
      const prefix = `public/${walletAddress}/${taskId}/raw-images/`;
      const command = new ListObjectsV2Command({
        Bucket: bucket,
        Prefix: prefix,
      });

      try {
        const response = await s3Client.send(command);
        const imageUrls = response.Contents?.filter(
          (obj) =>
            obj.Key &&
            obj.Key !== key &&
            /\.(jpg|jpeg|png|gif|bmp)$/i.test(obj.Key)
        ) // Exclude 'play.back' file and non-image files
          .map(
            (obj) =>
              `https://${bucket}.s3.${'ap-southeast-2'}.amazonaws.com/${
                obj.Key
              }`
          );

        if (imageUrls) {
          console.log('Image URLs:', imageUrls);

          // Call sendTransaction with the extracted image URLs
          const recipient = walletAddress; // replace with actual recipient
          const systemMessage = `You are an expert at analyzing images extracted from screen recordings and understanding the actions being performed at a image and overall level to understand the task being completed in a given set of images. 
          You effortlessly understand the actions by looking at the frames and can reflect on these to produce a description of the task being performed based on the input images.
          Once you understand the task(s) being performed in a set of input images, you are able to accurately estimate the relevancy of the input images relative to a given task and calculate how many tokens should be rewarded for the submission.`;
          const message = `TASK = "${taskName}"
          the attached images are video frames extracted from a recording SUBMISSION depicting a person doing a TASK on their computer to contribute to a dataset showing how to do different tasks on computers

the filename of each image correlates to its timestamp

Respond in the following way:

First re-state the TASK that *should* be depicted in the SUBMISSION frames (note that the submitted video frames could be totally irrelevant and therefore the submission should be ignored). 

analyse and reflect on these frames by constructing a table outlining each action that goes into completing the task

then return a 10 word description of the task

finally, estimate how many tokens you would give someone for submitting this recording to a database of recordings of every possible human task. 

the points rewarded should depend both on complexity and how well it was executed relative the TASK above. 

If the frames from the video submitted are completely unrelated to the TASK then 0 tokens should be awarded. If it is a perfect depiction of the required TASK and nothing else then it should be rewarded near 100 points.

Calculate {tokens} as an estimated reward for this submission - integer between 0 and 100. Remember that SUBMISSION frames that are depicting a different task than the given TASK should be rewarded 0 tokens even if part of the actions are similar.  

Estimate the difficulty of this task relative to every possible task that a human can complete on a computer in under 3 minutes and adjust the awarded tokens relative to the difficulty of this task. A perfectly completed and relevant SUBMISSION for a difficult task should receive 100 tokens while a perfectly completed submission for an easy task should only be awarded 10 or so tokens and a medium task should receive around 50 tokens.

Summarize your steps in deciding how many tokens to award this SUBMISSION relative to the required TASK that the submission should match

Write your reasoning then end your answer with the final line after a blank line:

"Valuation: {tokens}"`;

          await sendTransaction(recipient, systemMessage, message, imageUrls);
        } else {
          console.log('No images found in the folder.');
        }
      } catch (error) {
        console.error('Error listing objects in S3:', error);
      }
    }
  }

  return;
};
