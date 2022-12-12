import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';
import Topbar from 'components/Topbar';
import useBreakpoints from 'hooks/useBreakpoints';
import useChat from 'hooks/useChat';
import useDialog from 'hooks/useDialog';
import useSidebar from 'hooks/useSidebar';
import useUserData from 'hooks/useUserData';
import Login from 'templates/Login';

const ApplicationLayout = () => {
  const { openSidebar } = useSidebar();
  const { openChat } = useChat();
  const { openDialog } = useDialog();
  const { isLoggedIn, userId, clearUserData } = useUserData();
  const navigate = useNavigate();
  const { isMediumScreen } = useBreakpoints();

  const basePadding = isMediumScreen ? 20 : 40;

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
        onAccountClick={() => navigate(`/application/account/${userId}`)}
        onLoginClick={() => openDialog({ content: <Login /> })}
        onLogoutClick={clearUserData}
        isLoggedIn={isLoggedIn}
      />
      <Box
        sx={{
          flex: 1,
          padding: basePadding,
          paddingTop: basePadding + 50,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default ApplicationLayout;
