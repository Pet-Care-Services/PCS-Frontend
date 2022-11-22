import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const Error = ({ code }) => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        alignItems: 'center',
        paddingTop: 20,
      }}
    >
      <Box
        component="img"
        src={require('assets/empty.png')}
        alt="404"
        sx={{ width: 100 }}
      />
      <Typography variant="h2" sx={{ fontSize: 30 }}>
        {code === 404 && t('error.pageNotFound')}
        {code === 500 && t('error.unknown')}
      </Typography>
    </Box>
  );
};

Error.propTypes = {
  code: PropTypes.oneOf([404, 500]).isRequired,
};

export default Error;
