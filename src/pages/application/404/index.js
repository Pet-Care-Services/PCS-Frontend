import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const Page404 = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        alignItems: 'center',
      }}
    >
      <Box
        component="img"
        src={require('assets/empty.png')}
        alt="404"
        sx={{ width: 100 }}
      />
      <Typography variant="h2" sx={{ fontSize: 30 }}>
        {t('pageNotFound')}
      </Typography>
    </Box>
  );
};
export default Page404;
