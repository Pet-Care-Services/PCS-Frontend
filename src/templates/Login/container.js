import React from 'react';
import { noop } from 'lodash';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';
import useDialog from 'hooks/useDialog';
import useUserData from 'hooks/useUserData';
import { postLogin } from './queries';
import LoginView from './view';

let formikSetFieldError = noop;

const LoginContainer = () => {
  const { t } = useTranslation();
  const { closeDialog } = useDialog();
  const { setToken, setUsername } = useUserData();

  const { mutate: login } = useMutation(postLogin, {
    onSuccess: (res) => {
      closeDialog();
      const bearerToken = `Bearer ${res.data.token}`;
      setToken(bearerToken);
      setUsername(res.data.username);
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
