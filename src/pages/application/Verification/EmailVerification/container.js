import React, { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import useURLParams from 'hooks/useURLParams';
import { postVerifyEmail } from './queries';
import EmailVerificationView from './view';

const REDIRECT_TIME = 5;

const EmailVerification = () => {
  const { params } = useURLParams();
  const navigate = useNavigate();

  const {
    isIdle,
    isSuccess,
    isLoading,
    mutate: verifyEmail,
  } = useMutation(postVerifyEmail, {
    onSuccess: () => {
      setTimeout(() => {
        navigate('/application');
      }, REDIRECT_TIME * 1000);
    },
  });

  useEffect(() => {
    verifyEmail({ email: params.email, code: params.code });
  }, []);

  return (
    <EmailVerificationView
      isLoading={isLoading || isIdle}
      isSuccess={isSuccess}
      redirectTime={REDIRECT_TIME}
    />
  );
};

export default EmailVerification;
