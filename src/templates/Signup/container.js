import React from 'react';
import { noop } from 'lodash';
import { useMutation } from 'react-query';
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

  const { mutate: signup, isLoading: isLoadingSignup } = useMutation(
    postSignup,
    {
      onSuccess: (res) => {
        const bearerToken = `Bearer ${res.data.token}`;
        setToken(bearerToken);
        openDialog(<VerifyEmailInformation />, false);
      },
      onError: (err) => {
        if (err.response.status === 400) {
          // TODO lepsza walidacja od API
          formikSetFieldError('email', err.response.data);
        }
      },
    }
  );

  const onSubmit = (values, { setFieldError }) => {
    signup(values);
    formikSetFieldError = setFieldError;
  };

  const onGoToLogin = () => {
    openDialog(<Login />);
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
