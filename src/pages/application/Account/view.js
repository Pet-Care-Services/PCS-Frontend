import React from 'react';
import { useTranslation } from 'react-i18next';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Button from 'components/Button';
import useUserData from 'hooks/useUserData';
import styles from './styles';

const AccountView = () => {
  const { t } = useTranslation();
  const { name, lastname, smsVerified, emailVerified } = useUserData();

  return (
    <Box sx={styles.root}>
      <Box sx={{ ...styles.column, ...styles.leftColumn }}>
        <Box
          component="img"
          src={require('assets/mockPhoto.jpg')}
          sx={styles.image}
        />
        <Button>{t('upload')}</Button>
      </Box>
      <Box sx={styles.column}>
        <Typography variant="h1">
          {name} {lastname}
        </Typography>
        <Box sx={styles.inline}>
          {emailVerified ? (
            <CheckCircleIcon sx={styles.check} />
          ) : (
            <ErrorIcon sx={styles.error} />
          )}
          <Typography>{t('emailVerification')}</Typography>
        </Box>
        <Box sx={styles.inline}>
          {smsVerified ? (
            <CheckCircleIcon sx={styles.check} />
          ) : (
            <ErrorIcon sx={styles.error} />
          )}
          <Typography>{t('mobileVerification')}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

AccountView.propTypes = {};

AccountView.defaultProps = {};

export default AccountView;
