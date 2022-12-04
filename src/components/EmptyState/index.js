import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import useTheme from 'hooks/useTheme';

const EmptyState = () => {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Box
        component="img"
        src={require('assets/empty.png')}
        alt=""
        sx={{
          width: 100,
          filter: isDarkMode
            ? 'invert(99%) sepia(25%) saturate(173%) hue-rotate(33deg) brightness(115%) contrast(100%)'
            : '',
        }}
      />
      <Typography variant="h2" sx={{ color: (theme) => theme.palette.black }}>
        {t('noResults')}
      </Typography>
    </Box>
  );
};

EmptyState.propTypes = {};

EmptyState.defaultProps = {};

export default EmptyState;
