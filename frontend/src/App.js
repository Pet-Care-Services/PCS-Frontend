import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from 'pages';
import AppThemeProvider from 'providers/Theme';

const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </AppThemeProvider>
  );
};

export default App;
