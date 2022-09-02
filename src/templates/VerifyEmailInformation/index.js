import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';
import useDialog from 'hooks/useDialog';
import useSnackbar from 'hooks/useSnackbar';
import useUserData from 'hooks/useUserData';
import MobileVerification from 'templates/MobileVerification';
import SimpleInfoDialogContent from 'templates/SimpleInfoDialogContent';
import { postSendVerificationEmail } from './queries';

const VerifyEmailInformation = () => {
  const { t } = useTranslation();
  const { openDialog } = useDialog();
  const { openSnackbar } = useSnackbar();
  const [isFirstLoad, setFirstLoad] = useState(true);
  const { emailVerified, smsVerified } = useUserData();

  const { mutate: sendVerificationEmail } = useMutation(
    postSendVerificationEmail,
    {
      onSuccess: () => {
        if (!isFirstLoad) {
          openSnackbar(t('verificationEmailHasBeenSent'));
        }
      },
      onError: () => {
        openSnackbar(t('error.sendEmail'));
      },
    }
  );

  useEffect(() => {
    sendVerificationEmail();
    setFirstLoad(false);
  }, []);

  useEffect(() => {
    if (emailVerified && smsVerified === false) {
      openDialog(<MobileVerification />, false);
    }
  }, [emailVerified]);

  return (
    <SimpleInfoDialogContent
      title={t('activateAccount')}
      information={t('verifyYourEmail')}
      withOkButton={false}
      onLinkClick={sendVerificationEmail}
      linkText={t('resendEmail')}
    />
  );
};

export default VerifyEmailInformation;
