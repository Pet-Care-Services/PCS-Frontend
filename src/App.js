import React from 'react';
import axios from 'axios';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Routing from 'pages';
import DialogProvider from 'providers/Dialog';
import SidebarProvider from 'providers/Sidebar';
import AppThemeProvider from 'providers/Theme';
import UserDataProvider from 'providers/UserData';

const queryClient = new QueryClient();

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <QueryClientProvider client={queryClient}>
        <UserDataProvider>
          <AppThemeProvider>
            <DialogProvider>
              <SidebarProvider>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                  <Routing />
                </BrowserRouter>
              </SidebarProvider>
            </DialogProvider>
          </AppThemeProvider>
        </UserDataProvider>
      </QueryClientProvider>
    </LocalizationProvider>
  );
};

export default App;
