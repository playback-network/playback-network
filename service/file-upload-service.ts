import { uploadData } from 'aws-amplify/storage';

const uploadFileToS3Bucket = async ({
  file,
  identityId,
}: {
  file: File;
  identityId: string;
}): Promise<boolean> => {
  try {
    const result = await uploadData({
      path: `public/${identityId}/${file.name}`, // Modified path value
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
