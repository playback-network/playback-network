import { StorageManager } from '@aws-amplify/ui-react-storage';

const preprocessFile = async ({
  file,
}: {
  file: File;
}): Promise<{ file: File; key: string }> => {
  const fileExtension: string = file.name.split('.').pop()!;

  return file
    .arrayBuffer()
    .then((filebuffer: ArrayBuffer) =>
      window.crypto.subtle.digest('SHA-1', filebuffer)
    )
    .then((hashBuffer: ArrayBuffer) => {
      const hashArray: number[] = Array.from(new Uint8Array(hashBuffer));
      const hashHex: string = hashArray
        .map((a: number) => a.toString(16).padStart(2, '0'))
        .join('');
      return { file, key: `${hashHex}.${fileExtension}` };
    });
};

export const FileUploader = () => {
  return (
    <StorageManager
      acceptedFileTypes={['image/*', 'video/*']}
      path="public/"
      maxFileCount={1}
      processFile={preprocessFile}
      // maxFileSize={10000} // Size is in bytes - TBD
    />
  );
};
