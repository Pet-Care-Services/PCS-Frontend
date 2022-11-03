import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';
import Topbar from 'components/Topbar';
import useChat from 'hooks/useChat';
import useSidebar from 'hooks/useSidebar';
import useUserData from 'hooks/useUserData';

const ApplicationLayout = () => {
  const { openSidebar } = useSidebar();
  const { openChat } = useChat();
  const { isLoggedIn } = useUserData();
  const navigate = useNavigate();

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
      <Topbar
        onMenuClick={openSidebar}
        onChatClick={openChat}
        onAccountClick={() => navigate('/application/account')}
        withRightIcons={isLoggedIn}
      />
      <Box sx={{ flex: 1, padding: 40 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default ApplicationLayout;
