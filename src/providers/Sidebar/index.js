import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { Drawer } from '@mui/material';
import Sidebar from 'components/Sidebar';
import useBreakpoints from 'hooks/useBreakpoints';
import useDialog from 'hooks/useDialog';
import useMenuItems from 'hooks/useMenuItems';
import useUserData from 'hooks/useUserData';
import Login from 'templates/Login';
import reducer, { actions } from './reducer';

const initialState = {
  open: false,
};

const SidebarContext = React.createContext({});

const SidebarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  const { isLoggedIn, clearUserData } = useUserData();
  const { openDialog } = useDialog();
  const { isExtraSmallScreen } = useBreakpoints();

  const handleClose = () => {
    dispatch({
      type: actions.CLOSE_SIDEBAR,
    });
  };

  const onLoginClick = () => {
    handleClose();
    openDialog({ content: <Login /> });
  };

  const onLogoutClick = () => {
    handleClose();
    clearUserData();
  };

  const sidebarItems = useMenuItems();

  return (
    <SidebarContext.Provider value={value}>
      {children}
      <Drawer
        anchor="left"
        open={state.open}
        PaperProps={{
          sx: {
            width: isExtraSmallScreen ? '100%' : 300,
            backgroundColor: (theme) => theme.palette.primary.main,
          },
        }}
        onClose={handleClose}
      >
        <Sidebar
          items={sidebarItems}
          isLoggedIn={isLoggedIn}
          onLoginClick={onLoginClick}
          onLogoutClick={onLogoutClick}
          onBackArrowClick={handleClose}
          onItemClick={handleClose}
        />
      </Drawer>
    </SidebarContext.Provider>
  );
};

SidebarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SidebarProvider;

export { SidebarContext };
