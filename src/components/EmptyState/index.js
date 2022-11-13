import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';

const EmptyState = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Box
        component="img"
        src={require('assets/empty.png')}
        alt=""
        sx={{ width: 100 }}
      />
      <Typography variant="h2">{t('noResults')}</Typography>
    </Box>
  );
};

EmptyState.propTypes = {};

EmptyState.defaultProps = {};

export default EmptyState;
