import { useEffect, useRef, useState } from 'react';
import AWS from 'aws-sdk';
import { includes, isNil, split, uniqueId, values } from 'lodash';
import { S3_DIRECTORY } from 'consts/enums';
import useUserData from './useUserData';

const generateObjectKey = (filename, userId, destination) => {
  const splittedByDot = split(filename, '.');
  const extension = splittedByDot[splittedByDot.length - 1];
  const userIdPart = !isNil(userId) ? `${userId}-` : '';

  return `${destination}/${userIdPart}${uniqueId()}-${Date.now()}.${extension}`;
};

const useAWSUpload = () => {
  const { userId } = useUserData();
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const myBucketRef = useRef();

  useEffect(() => {
    AWS.config.update({
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    });

    myBucketRef.current = new AWS.S3({
      params: { Bucket: process.env.REACT_APP_AWS_S3_BUCKET },
      region: process.env.REACT_APP_AWS_REGION,
    });
  }, []);

  const uploadFileToS3 = (file, destination, onUploadEnd) => {
    if (!includes(values(S3_DIRECTORY), destination)) {
      throw new Error(`Wrong S3 destination: ${destination}!`);
    }
    setIsLoading(true);
    const Key = generateObjectKey(file.name, userId, destination);

    const params = {
      Body: file,
      Key,
    };

    myBucketRef.current
      .upload(params)
      .on('httpUploadProgress', (evt) => {
        setProgress(Math.round((evt.loaded / evt.total) * 100));
      })
      .send((err, data) => {
        if (err) console.log(err);
        else {
          setIsLoading(false);
          setProgress(0);
          onUploadEnd(data.Location);
        }
      });
  };

  return {
    uploadFileToS3,
    isLoading,
    progress,
  };
};

export default useAWSUpload;
