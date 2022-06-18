import React from 'react';
import { noop } from 'lodash';
import { useMutation } from 'react-query';
import useDialog from 'hooks/useDialog';
import Login from 'templates/Login';
import { postSignup } from './queries';
import SignupView from './view';

let formikSetFieldError = noop;

const SignupContainer = () => {
  const { closeDialog, openDialog } = useDialog();

  const { mutate: signup } = useMutation(postSignup, {
    onSuccess: () => {
      closeDialog();
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
