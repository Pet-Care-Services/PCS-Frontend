import React from 'react';
import SunIcon from '@mui/icons-material/LightMode';
import MoonIcon from '@mui/icons-material/NightlightRound';
import Icon from 'components/Icon';
import useTheme from 'hooks/useTheme';
import { MODE } from 'providers/Theme/theme';

const ThemeModeSwitch = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const changeMode = () => {
    localStorage.setItem('mode', isDarkMode ? MODE.LIGHT : MODE.DARK);
    toggleTheme();
  };

  return (
    <Icon
      Component={isDarkMode ? MoonIcon : SunIcon}
      onClick={changeMode}
      active
      sx={{
        width: 30,
        height: 30,
        backgroundColor: (theme) =>
          theme.palette[isDarkMode ? 'black' : 'white'],
        color: (theme) => theme.palette[isDarkMode ? 'white' : 'black'],
      }}
    />
  );
};

export default ThemeModeSwitch;
