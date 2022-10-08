import React, { useEffect, useState } from 'react';
import { noop } from 'lodash';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';
import useDialog from 'hooks/useDialog';
import useSnackbar from 'hooks/useSnackbar';
import useUserData from 'hooks/useUserData';
import { verifyCodeMutation, resendCodeMutation } from './queries';
import MobileVerificationView from './view';

let formikSetFieldError = noop;

const MobileVerificationContainer = () => {
  const { t } = useTranslation();
  const { closeDialog } = useDialog();
  const { openSnackbar } = useSnackbar();
  const { clearUserData } = useUserData();
  const [isFirstLoad, setFirstLoad] = useState(true);

  const { mutate: verifyCode } = useMutation(verifyCodeMutation, {
    onSuccess: () => {
      closeDialog();
      openSnackbar(t('mobileHasBeenVerified'));
    },
    onError: () => {
      formikSetFieldError('code', t('validation.invalidCode'));
    },
  });

  const { mutate: sendCodeBySMS } = useMutation(resendCodeMutation, {
    onSuccess: () => {
      if (!isFirstLoad) {
        openSnackbar(t('codeHasBeenResent'));
      }
    },
    onError: () => {
      openSnackbar(t('error.unknown'));
    },
  });

  useEffect(() => {
    sendCodeBySMS();
    setFirstLoad(false);
  }, []);

  const onSubmit = (values, { setFieldError }) => {
    verifyCode(values);
    formikSetFieldError = setFieldError;
  };

  const onLogoutClick = () => {
    closeDialog();
    clearUserData();
  };

  return (
    <MobileVerificationView
      onResendCode={sendCodeBySMS}
      onLogoutClick={onLogoutClick}
      onSubmit={onSubmit}
    />
  );
};

export default MobileVerificationContainer;
