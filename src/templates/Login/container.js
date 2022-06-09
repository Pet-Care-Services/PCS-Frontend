import React from 'react';
import { noop } from 'lodash';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';
import useDialog from 'hooks/useDialog';
import { postLogin } from './queries';
import LoginView from './view';

let formikSetFieldError = noop;

const LoginContainer = () => {
  const { t } = useTranslation();
  const { closeDialog } = useDialog();
  const { mutate: login } = useMutation(postLogin, {
    onSuccess: () => {
      closeDialog();
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

  return <LoginView onSubmit={onSubmit} />;
};

export default LoginContainer;
