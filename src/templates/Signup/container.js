import React from 'react';
import { noop } from 'lodash';
import { useMutation } from 'react-query';
import { AVATAR_PLACEHOLDER_PUBLIC_URL } from 'consts/config';
import { S3_DIRECTORY } from 'consts/enums';
import useAWSUpload from 'hooks/useAWSUpload';
import useDialog from 'hooks/useDialog';
import useUserData from 'hooks/useUserData';
import Login from 'templates/Login';
import VerifyEmailInformation from 'templates/VerifyEmailInformation';
import { postSignup } from './queries';
import SignupView from './view';

let formikSetFieldError = noop;

const SignupContainer = () => {
  const { openDialog } = useDialog();
  const { setToken } = useUserData();
  const { uploadFileToS3 } = useAWSUpload();

  const { mutate: signup, isLoading: isLoadingSignup } = useMutation(
    postSignup,
    {
      onSuccess: (res) => {
        const bearerToken = `Bearer ${res.data.token}`;
        setToken(bearerToken);
        openDialog({ content: <VerifyEmailInformation />, closable: false });
      },
      onError: (err) => {
        if (err.response.status === 409) {
          // TODO lepsza walidacja od API
          formikSetFieldError('email', err.response.data);
        }
      },
    }
  );

  const onSubmit = (values, { setFieldError }) => {
    const submit = (publicAvatarUrl) => {
      signup({ ...values, avatar: publicAvatarUrl });
    };

    if (values.avatar.file) {
      uploadFileToS3(values.avatar.file, S3_DIRECTORY.AVATARS, submit);
    } else {
      submit(AVATAR_PLACEHOLDER_PUBLIC_URL);
    }
    formikSetFieldError = setFieldError;
  };

  const onGoToLogin = () => {
    openDialog({ content: <Login /> });
  };

  return (
    <SignupView
      onGoToLogin={onGoToLogin}
      onSubmit={onSubmit}
      isLoading={isLoadingSignup}
    />
  );
};

export default SignupContainer;
