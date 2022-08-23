import React from 'react';
import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import ActionText from 'components/ActionText';
import Button from 'components/Button';
import CodeInput from 'components/CodeInput';
import styles from './styles';
import getValidation from './validation';

const MobileVerificationView = ({ onResendCode, onSubmit }) => {
  const { t } = useTranslation();

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={{ code: '' }}
      validationSchema={getValidation(t)}
      validateOnChange={false}
      validateOnBlur={false}
    >
      <Box component={Form} sx={styles.root}>
        <Typography variant="h1">{t('mobileVerification')}</Typography>
        <Typography variant="body" sx={styles.description}>
          {t('smsHasBeenSent')}
        </Typography>
        <CodeInput autoFocus fastSubmitAction={onSubmit} />

        <Button type="submit">{t('verify')}</Button>
        <ActionText onClick={onResendCode} sx={styles.linkButton}>
          {t('resendCode')}
        </ActionText>
      </Box>
    </Formik>
  );
};

MobileVerificationView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onResendCode: PropTypes.func.isRequired,
};

export default MobileVerificationView;
