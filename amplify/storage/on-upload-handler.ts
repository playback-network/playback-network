import { S3Handler } from 'aws-lambda';
import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';
import { ethers } from 'ethers';

// Placeholder ABI
const contractABI: any = [
  // Replace this with the actual ABI
  'function startChat(address recipient, string systemMessage, string message, string[] imageUrls)',
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

      // List all objects in the folder
      const prefix = `public/${walletAddress}/${taskId}/raw-images/`;
      const command = new ListObjectsV2Command({
        Bucket: bucket,
        Prefix: prefix,
      });

      try {
        const response = await s3Client.send(command);
        const imageUrls = response.Contents?.filter(
          (obj) => obj.Key && obj.Key !== key
        ) // Exclude 'play.back' file
          .map(
            (obj) =>
              `https://${bucket}.s3.${'ap-southeast-2'}.amazonaws.com/${
                obj.Key
              }`
          );

        if (imageUrls) {
          console.log('Image URLs:', imageUrls);

          // Call sendTransaction with the extracted image URLs
          const recipient = '0xRecipientAddress'; // replace with actual recipient
          const systemMessage = 'System message';
          const message = 'Hello!';

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
