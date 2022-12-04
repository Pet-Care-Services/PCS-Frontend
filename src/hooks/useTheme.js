import { useContext } from 'react';
import { useTheme as useMUITheme } from '@mui/material';
import { ThemeContext } from 'providers/Theme';
import { actions } from 'providers/Theme/reducer';
import { MODE } from 'providers/Theme/theme';

const useTheme = () => {
  const context = useContext(ThemeContext);
  const MUITheme = useMUITheme();

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeContext');
  }

  const toggleTheme = () => {
    context.dispatch({
      type: actions.TOGGLE_THEME,
    });
  };

  return {
    ...MUITheme,
    mode: context.state.mode,
    isDarkMode: context.state.mode === MODE.DARK,
    toggleTheme,
  };
};

export default useTheme;
