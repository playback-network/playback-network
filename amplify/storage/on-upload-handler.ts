import { S3Handler } from 'aws-lambda';
import { ethers } from 'ethers';

// Placeholder ABI
const contractABI: any = [
  // Replace this with the actual ABI
  'function startChat(address recipient, string systemMessage, string message, string[] imageUrls)',
];

async function sendTransaction(
  recipient: string,
  systemMessage: string,
  message: string,
  imageUrls: string[]
) {
  const contractAddress = '0x2dC8Bc53ECf1A59188e4c7fAB0c7bB57339F85e7';
  const privateKey =
    '0xe11dfd3f6a929f1e6e3374f19c15aa89d83d800cc5ce71ef5b385db78820d26e';

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
  console.log(`Upload handler invoked for objects [${objectKeys.join(', ')}]`);

  for (const record of event.Records) {
    const bucket = record.s3.bucket.name;
    const key = record.s3.object.key;

    if (key.endsWith('/raw-images/play.back')) {
      console.log(`Processing file: ${key} in bucket: ${bucket}`);
      // Your processing logic here
    }
  }
};
