import React from 'react';
import { Outlet } from 'react-router-dom';
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
  const { isLoggedIn, clearUserData } = useUserData();
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
        onChatClick={() => openChat()}
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
