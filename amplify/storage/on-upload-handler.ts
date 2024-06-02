import { S3Handler } from 'aws-lambda';

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
