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
import ChatIconSrc from 'assets/icons/chat.png';
import Icon from 'components/Icon';
import LanguageSwitch from 'components/LanguageSwitch';
import ThemeModeSwitch from 'components/ThemeModeSwitch';
import { DEFAULT_ROUTE } from 'consts/config';
import useBreakpoints from 'hooks/useBreakpoints';
import useMenuItems from 'hooks/useMenuItems';
import styles from './styles';

const Topbar = ({
  isLoggedIn,
  onMenuClick,
  onLoginClick,
  onLogoutClick,
  onChatClick,
}) => {
  const { t } = useTranslation();
  const {
    isMediumScreen,
    isLargeScreen,
    isSmallMidScreen,
    isExtraSmallScreen,
  } = useBreakpoints();
  const navigate = useNavigate();

  const menuItems = useMenuItems();

  const logoView = (
    <Box
      sx={[styles.logo, isSmallMidScreen && !isLoggedIn && styles.logoShift]}
      onClick={() => navigate(DEFAULT_ROUTE)}
    >
      <PetsIcon />
      {(!isLargeScreen || (isSmallMidScreen && !isExtraSmallScreen)) && (
        <Typography variant="h2">{t('petCareServices')}</Typography>
      )}
    </Box>
  );

  return (
    <MuiAppBar position="fixed" sx={styles.root}>
      <MuiToolbar sx={styles.toolbar}>
        <Box sx={styles.icons}>
          {isSmallMidScreen ? (
            <Icon size="large" Component={MenuIcon} onClick={onMenuClick} />
          ) : (
            logoView
          )}
        </Box>
        {!isSmallMidScreen ? (
          <Box sx={styles.middleArea}>
            {map(menuItems, (item) => (
              <Box key={item.id} sx={styles.linkWrapper}>
                <Typography
                  variant={isMediumScreen ? 'h4' : 'h2'}
                  onClick={() => item.onClick()}
                  sx={[styles.link, item.isActive && styles.activeLink]}
                >
                  {item.title}
                </Typography>
                <Box
                  sx={[
                    styles.indicator,
                    item.isActive && styles.activeIndicator,
                  ]}
                  className="indicator"
                />
              </Box>
            ))}
          </Box>
        ) : (
          logoView
        )}
        <Box sx={{ ...styles.icons, ...styles.rightIcons }}>
          {!isSmallMidScreen && (
            <>
              <Icon
                size="large"
                Component={isLoggedIn ? LogoutIcon : LoginIcon}
                onClick={isLoggedIn ? onLogoutClick : onLoginClick}
              />
              <LanguageSwitch />
              <ThemeModeSwitch />
            </>
          )}
          {isLoggedIn && isSmallMidScreen && (
            <Icon
              size="large"
              Component="img"
              componentProps={{
                src: ChatIconSrc,
              }}
              onClick={onChatClick}
            />
          )}
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
  onChatClick: PropTypes.func,
};

Topbar.defaultProps = {
  isLoggedIn: false,
  onMenuClick: noop,
  onLoginClick: noop,
  onLogoutClick: noop,
  onChatClick: noop,
};

export default Topbar;
