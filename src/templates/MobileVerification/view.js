import React from 'react';
import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import ActionText from 'components/ActionText';
import CodeInput from 'components/CodeInput';
import styles from './styles';

const MobileVerificationView = ({ onResendCode, onLogoutClick, onSubmit }) => {
  const { t } = useTranslation();

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={{ code: '' }}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ submitForm }) => (
        <Box component={Form} sx={styles.root}>
          <Typography variant="h1">{t('mobileVerification')}</Typography>
          <Typography variant="body">{t('smsHasBeenSent')}</Typography>
          <CodeInput
            name="code"
            autoFocus
            fastSubmitAction={submitForm}
            sx={styles.codeInput}
          />

          <Box sx={styles.linksWrapper}>
            <ActionText onClick={onLogoutClick}>{t('logout')}</ActionText>
            <ActionText onClick={onResendCode} sx={styles.rightLinkButton}>
              {t('resendCode')}
            </ActionText>
          </Box>
        </Box>
      )}
    </Formik>
  );
};

MobileVerificationView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onResendCode: PropTypes.func.isRequired,
  onLogoutClick: PropTypes.func.isRequired,
};

export default MobileVerificationView;
