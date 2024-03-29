import React from 'react';
import PropTypes from 'prop-types';
import ChatProvider from 'providers/Chat';
import DialogProvider from 'providers/Dialog';
import SidebarProvider from 'providers/Sidebar';
import SnackbarProvider from 'providers/Snackbar';
import AppThemeProvider from 'providers/Theme';
import UserDataProvider from 'providers/UserData';
import ErrorBoundary from './ErrorBoundary';

const AllProviders = ({ children }) => (
  <UserDataProvider>
    <AppThemeProvider>
      <SnackbarProvider>
        <ChatProvider>
          <DialogProvider>
            <SidebarProvider>
              <ErrorBoundary>{children}</ErrorBoundary>
            </SidebarProvider>
          </DialogProvider>
        </ChatProvider>
      </SnackbarProvider>
    </AppThemeProvider>
  </UserDataProvider>
);

AllProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AllProviders;
