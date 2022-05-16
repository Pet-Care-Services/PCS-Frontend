import React, { useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import reducer from './reducer';
import { MODE, lightTheme, darkTheme } from './theme';

const initialState = {
  mode: MODE.LIGHT,
};

const ThemeContext = React.createContext({});

const AppThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  const theme = useMemo(
    () => createTheme(state.mode === MODE.LIGHT ? lightTheme : darkTheme),
    [state.mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </ThemeProvider>
  );
};

AppThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppThemeProvider;

export { ThemeContext };
