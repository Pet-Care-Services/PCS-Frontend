import React from 'react';
import axios from 'axios';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import Routing from 'pages';
import SidebarProvider from 'providers/Sidebar';
import AppThemeProvider from 'providers/Theme';

const queryClient = new QueryClient();

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppThemeProvider>
        <SidebarProvider>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routing />
          </BrowserRouter>
        </SidebarProvider>
      </AppThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
