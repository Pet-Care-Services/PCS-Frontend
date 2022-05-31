import React from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import BackArrow from '@mui/icons-material/ArrowBackIosNew';
import { Box, Typography } from '@mui/material';

const AdvertismentCreator = () => {
  const { t } = useTranslation();

  const goBack = () => {
    console.log('goBack');
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box sx={{ width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            columnGap: 10,
            cursor: 'pointer',
            width: 'fit-content',
            alignItems: 'center',
          }}
          onClick={goBack}
        >
          <BackArrow sx={{ width: 16, height: 16, cursor: 'pointer' }} />
          <Typography>{t('back')}</Typography>
        </Box>
      </Box>
      <Outlet />
    </Box>
  );
};

export default AdvertismentCreator;
