import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/system';

const AuthorizedLayout = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.primary.main,
          height: 50,
          width: '100%',
        }}
      >
        Topbar here
      </Box>
      <Box sx={{ flex: 1, padding: 40 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default AuthorizedLayout;
