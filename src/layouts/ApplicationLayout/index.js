import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';
import Sidebar from 'components/Sidebar';
import Topbar from 'components/Topbar';
import useSidebar from 'hooks/useSidebar';
import useUserData from 'hooks/useUserData';
import { getSidebarItems } from './consts';

const ApplicationLayout = () => {
  const navigate = useNavigate();
  const sidebarItems = getSidebarItems(navigate);
  const { openSidebar, closeSidebar, isSidebarOpened } = useSidebar();
  const { isLoggedIn } = useUserData();

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
      }}
    >
      <Sidebar
        items={sidebarItems}
        open={isSidebarOpened}
        isLoggedIn={isLoggedIn}
        onBackClick={closeSidebar}
        onItemClick={closeSidebar}
      />
      <Topbar onMenuClick={openSidebar} withRightIcons={isLoggedIn} />
      <Box sx={{ flex: 1, padding: 40 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default ApplicationLayout;
