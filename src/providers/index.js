import React from 'react';
import PropTypes from 'prop-types';
import ChatProvider from 'providers/Chat';
import DialogProvider from 'providers/Dialog';
import SidebarProvider from 'providers/Sidebar';
import SnackbarProvider from 'providers/Snackbar';
import AppThemeProvider from 'providers/Theme';
import UserDataProvider from 'providers/UserData';

const AllProviders = ({ children }) => (
  <UserDataProvider>
    <AppThemeProvider>
      <SnackbarProvider>
        <DialogProvider>
          <SidebarProvider>
            <ChatProvider>{children}</ChatProvider>
          </SidebarProvider>
        </DialogProvider>
      </SnackbarProvider>
    </AppThemeProvider>
  </UserDataProvider>
);

AllProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AllProviders;
