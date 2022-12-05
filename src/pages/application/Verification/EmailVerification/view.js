import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import ErrorIcon from '@mui/icons-material/Error';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Loader from 'components/Loader';

const EmailVerification = ({ isLoading, isSuccess, redirectTime }) => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: (theme) => theme.palette.black,
      }}
    >
      {isLoading && <Loader />}
      {!isLoading && isSuccess && (
        <>
          <MarkEmailReadIcon
            sx={{ fontSize: 100, color: (theme) => theme.palette.primary.dark }}
          />
          <Typography variant="h3">{t('emailHasBeenVerified')}</Typography>
          <Typography variant="h3">
            {t('redirectInXSeconds', { value: redirectTime })}
          </Typography>
        </>
      )}
      {!isLoading && !isSuccess && (
        <>
          <ErrorIcon
            sx={{ fontSize: 100, color: (theme) => theme.palette.error.main }}
          />
          <Typography variant="h3">{t('emailVerificationFailed')}</Typography>
        </>
      )}
    </Box>
  );
};

EmailVerification.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  redirectTime: PropTypes.number.isRequired,
};

export default EmailVerification;
