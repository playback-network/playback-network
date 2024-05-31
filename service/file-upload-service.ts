import { uploadData } from 'aws-amplify/storage';

const uploadFileToS3Bucket = async ({
  file,
  taskId,
  walletAddress,
}: {
  file: File;
  taskId: string;
  walletAddress: string;
}): Promise<boolean> => {
  try {
    const result = await uploadData({
      path: `public/${walletAddress}/${taskId}/raw-images/${file.name}`,
      data: file,
      options: {
        onProgress: ({ transferredBytes, totalBytes }) => {
          if (totalBytes) {
            console.log(
              `Upload progress ${Math.round(
                (transferredBytes / totalBytes) * 100
              )} %`
            );
          }
        },
      },
    });
    console.log('Result from Response: ', result);
    return true; // Successful upload
  } catch (error) {
    console.error('Error : ', error);
    return false; // Upload failure
  }
};

export default uploadFileToS3Bucket;
