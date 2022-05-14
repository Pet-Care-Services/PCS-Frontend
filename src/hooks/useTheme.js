import { useContext } from 'react';
import { ThemeContext } from 'providers/Theme';
import { actions } from 'providers/Theme/reducer';

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeContext');
  }

  const toggleTheme = () => {
    context.dispatch({
      type: actions.TOGGLE_THEME,
    });
  };

  return {
    toggleTheme,
  };
};

export default useTheme;
