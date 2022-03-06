import React, { useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, createTheme } from '@mui/material';
import { MODE, lightTheme, darkTheme } from './consts';
import reducer from './reducer';

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
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </ThemeProvider>
  );
};

AppThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppThemeProvider;

export { ThemeContext };
