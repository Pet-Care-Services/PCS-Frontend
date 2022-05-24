import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';
import Sidebar from 'components/Sidebar';
import Topbar from 'components/Topbar';
import { getSidebarItems } from './consts';

const AuthorizedLayout = () => {
  let navigate = useNavigate();
  const sidebarItems = getSidebarItems(navigate);

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
      <Sidebar items={sidebarItems} />
      <Topbar />
      <Box sx={{ flex: 1, padding: 40 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default AuthorizedLayout;
