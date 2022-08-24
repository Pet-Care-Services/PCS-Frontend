import React from 'react';
import { t } from 'i18next';
import { noop } from 'lodash';
import { useMutation } from 'react-query';
import useDialog from 'hooks/useDialog';
import Login from 'templates/Login';
import SimpleInfoDialogContent from 'templates/SimpleInfoDialogContent';
import { postSignup } from './queries';
import SignupView from './view';

let formikSetFieldError = noop;

const SignupContainer = () => {
  const { openDialog } = useDialog();

  const { mutate: signup } = useMutation(postSignup, {
    onSuccess: () => {
      openDialog(
        <SimpleInfoDialogContent
          title={t('welcome')}
          information={t('afterRegistrationMessage')}
        />
      );
    },
    onError: (err) => {
      if (err.response.status === 400) {
        // TODO lepsza walidacja od API
        formikSetFieldError('email', err.response.data);
      }
    },
  });

  const onSubmit = (values, { setFieldError }) => {
    signup(values);
    formikSetFieldError = setFieldError;
  };

  const onGoToLogin = () => {
    openDialog(<Login />);
  };

  return <SignupView onGoToLogin={onGoToLogin} onSubmit={onSubmit} />;
};

export default SignupContainer;
