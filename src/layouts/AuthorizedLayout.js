import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/system';
import Topbar from 'components/Topbar';

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
      <Topbar />
      <Box sx={{ flex: 1, padding: 40 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default AuthorizedLayout;
