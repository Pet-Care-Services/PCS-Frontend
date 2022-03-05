import React from 'react';
import Button from 'components/Button';
import AppThemeProvider from 'providers/Theme';
import './App.css';

const App = () => {
  return (
    <AppThemeProvider>
      <Button
        onClick={() => {
          console.log('I have been clicked!');
        }}
      >
        Click me
      </Button>
    </AppThemeProvider>
  );
};

export default App;
