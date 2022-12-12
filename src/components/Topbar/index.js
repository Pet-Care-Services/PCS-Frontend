import React from 'react';
import { map, noop } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import PetsIcon from '@mui/icons-material/Pets';
import { Box, Typography } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import MuiToolbar from '@mui/material/Toolbar';
import Icon from 'components/Icon';
import LanguageSwitch from 'components/LanguageSwitch';
import ThemeModeSwitch from 'components/ThemeModeSwitch';
import { DEFAULT_ROUTE } from 'consts/config';
import useBreakpoints from 'hooks/useBreakpoints';
import useMenuItems from 'hooks/useMenuItems';
import styles from './styles';

const Topbar = ({ isLoggedIn, onMenuClick, onLoginClick, onLogoutClick }) => {
  const { t } = useTranslation();
  const { isSmallScreen } = useBreakpoints();
  const navigate = useNavigate();

  const menuItems = useMenuItems();

  return (
    <MuiAppBar position="fixed" sx={styles.root}>
      <MuiToolbar sx={styles.toolbar}>
        <Box sx={styles.icons}>
          {isSmallScreen && (
            <Icon size="large" Component={MenuIcon} onClick={onMenuClick} />
          )}
          <Box sx={styles.logo} onClick={() => navigate(DEFAULT_ROUTE)}>
            <PetsIcon />
            <Typography variant="h2">{t('petCareServices')}</Typography>
          </Box>
        </Box>
        <Box sx={styles.middleArea}>
          {map(menuItems, (item) => (
            <Box key={item.id} sx={styles.linkWrapper}>
              <Typography
                variant="h2"
                onClick={() => item.onClick()}
                sx={[styles.link, item.isActive && styles.activeLink]}
              >
                {item.title}
              </Typography>
              {item.isActive && <Box sx={styles.activeIndicator} />}
            </Box>
          ))}
        </Box>
        <Box sx={{ ...styles.icons, ...styles.rightIcons }}>
          <Icon
            size="large"
            Component={isLoggedIn ? LogoutIcon : LoginIcon}
            onClick={isLoggedIn ? onLogoutClick : onLoginClick}
          />
          <LanguageSwitch />
          <ThemeModeSwitch />
        </Box>
      </MuiToolbar>
    </MuiAppBar>
  );
};

Topbar.propTypes = {
  isLoggedIn: PropTypes.bool,
  onMenuClick: PropTypes.func,
  onLoginClick: PropTypes.func,
  onLogoutClick: PropTypes.func,
};

Topbar.defaultProps = {
  isLoggedIn: false,
  onMenuClick: noop,
  onLoginClick: noop,
  onLogoutClick: noop,
};

export default Topbar;
