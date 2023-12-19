import { S3_BUCKET, S3_ENDPOINT } from '$/service/envValues';
import { s3Client } from '$/service/s3Client';
import { PutObjectCommand } from '@aws-sdk/client-s3';

export const s3Repository = {
  uploadProfileImage: async (directoryName: string, fileName: string, imageBuffer: Buffer) => {
    const key = `${directoryName}/${fileName}`;
    await s3Client.send(
      new PutObjectCommand({
        Bucket: S3_BUCKET,
        Key: key,
        Body: imageBuffer,
      })
    );
    const url = `${S3_ENDPOINT}/${S3_BUCKET}/${key}`;
    return url;
  },
};
