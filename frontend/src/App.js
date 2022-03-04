import React from 'react';
import { Box } from '@mui/system';
import AppThemeProvider from 'providers/Theme';
import './App.css';

const App = () => {
  return (
    <AppThemeProvider>
      <Box sx={{
        width: 200,
        height: 200,
        backgroundColor: (theme) => theme.palette.primary.main,
        padding: 10
      }}>
        <Box sx={{
          width: '100%',
          height: '100%',
          backgroundColor: (theme) => theme.palette.secondary.light
        }} />
      </Box>
    </AppThemeProvider>
  );
};

export default App;
