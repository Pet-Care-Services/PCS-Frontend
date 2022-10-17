import { useContext } from 'react';
import { useTheme as useMUITheme } from '@mui/material';
import { ThemeContext } from 'providers/Theme';
import { actions } from 'providers/Theme/reducer';

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
    toggleTheme,
  };
};

export default useTheme;
