import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const Loader = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Typography>{t('loading')}</Typography>
    </Box>
  );
};

export default Loader;
