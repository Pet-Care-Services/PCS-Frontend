import React from 'react';
import { noop } from 'lodash';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';
import useDialog from 'hooks/useDialog';
import useSnackbar from 'hooks/useSnackbar';
import { verifyCodeMutation, resendCodeMutation } from './queries';
import MobileVerificationView from './view';

let formikSetFieldError = noop;

const MobileVerificationContainer = () => {
  const { t } = useTranslation();
  const { closeDialog } = useDialog();
  const { openSnackbar } = useSnackbar();

  const { mutate: verifyCode } = useMutation(verifyCodeMutation, {
    onSuccess: () => {
      closeDialog();
      openSnackbar(t('mobileHasBeenVerified'));
    },
    onError: () => {
      formikSetFieldError('code', t('validation.invalidCode'));
    },
  });

  const { mutate: resendCode } = useMutation(resendCodeMutation, {
    onSuccess: () => {
      openSnackbar(t('codeHasBeenResent'));
    },
    onError: () => {
      openSnackbar(t('error.unknown'));
    },
  });

  const onSubmit = (values, { setFieldError }) => {
    verifyCode(values);
    formikSetFieldError = setFieldError;
  };

  return (
    <MobileVerificationView onResendCode={resendCode} onSubmit={onSubmit} />
  );
};

export default MobileVerificationContainer;
