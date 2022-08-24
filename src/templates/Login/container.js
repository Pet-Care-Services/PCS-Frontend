import React from 'react';
import { noop } from 'lodash';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';
import useDialog from 'hooks/useDialog';
import useUserData from 'hooks/useUserData';
import MobileVerification from 'templates/MobileVerification';
import Signup from 'templates/Signup';
import { postLogin, sendCodeMutation } from './queries';
import LoginView from './view';

let formikSetFieldError = noop;

const LoginContainer = () => {
  const { t } = useTranslation();
  const { closeDialog, openDialog } = useDialog();
  const { setToken, setUsername } = useUserData();

  const { mutate: sendCode } = useMutation(sendCodeMutation, {
    onSuccess: () => {
      openDialog(<MobileVerification />);
    },
    onError: () => {
      // TODO Snackbar here
    },
  });

  const { mutate: login } = useMutation(postLogin, {
    onSuccess: (res) => {
      closeDialog();
      const bearerToken = `Bearer ${res.data.token}`;
      setToken(bearerToken);
      setUsername(res.data.username);
      sendCode();
    },
    onError: () => {
      formikSetFieldError('email', t('validation.emailOrPasswordInvalid'));
      formikSetFieldError('password', t('validation.emailOrPasswordInvalid'));
    },
  });

  const onSubmit = (values, { setFieldError }) => {
    login(values);
    formikSetFieldError = setFieldError;
  };

  const onGoToSignup = () => {
    openDialog(<Signup />);
  };

  return <LoginView onGoToSignup={onGoToSignup} onSubmit={onSubmit} />;
};

export default LoginContainer;
