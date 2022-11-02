import React from 'react';
import { filter, map, noop } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box } from '@mui/material';
import Button from 'components/Button';
import Icon from 'components/Icon';
import LanguageSwitch from 'components/LanguageSwitch';
import ThemeModeSwitch from 'components/ThemeModeSwitch';
import Item from './components/Item';
import styles from './styles';

const Sidebar = ({
  items,
  isLoggedIn,
  onLoginClick,
  onLogoutClick,
  onBackArrowClick,
  onItemClick,
}) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const visibleItems = filter(
    items,
    (item) => !item.isLoginRequired || isLoggedIn
  );

  return (
    <>
      <Box sx={styles.topIconsWrapper}>
        <Box sx={styles.leftIcons}>
          <LanguageSwitch />
          <ThemeModeSwitch />
        </Box>
        <Icon Component={ArrowBackIcon} onClick={onBackArrowClick} />
      </Box>
      <Box sx={styles.itemsWrapper}>
        {map(visibleItems, (item) => (
          <Item
            key={item.id}
            active={pathname.startsWith(item.activeUrl)}
            title={t(item.titleKey)}
            iconSrc={item.iconSrc}
            onClick={() => {
              item.onClick();
              onItemClick();
            }}
          />
        ))}
      </Box>
      <Button
        variant="text"
        onClick={isLoggedIn ? onLogoutClick : onLoginClick}
        sx={styles.loginButton}
      >
        {t(isLoggedIn ? 'logout' : 'login')}
      </Button>
    </>
  );
};

Sidebar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      titleKey: PropTypes.string,
      iconSrc: PropTypes.string,
      onClick: PropTypes.func,
      activeUrl: PropTypes.string,
      isLoginRequired: PropTypes.bool,
    })
  ),
  isLoggedIn: PropTypes.bool,
  onLoginClick: PropTypes.func,
  onLogoutClick: PropTypes.func,
  onBackArrowClick: PropTypes.func,
  onItemClick: PropTypes.func,
};

Sidebar.defaultProps = {
  items: [],
  isLoggedIn: false,
  onLoginClick: noop,
  onLogoutClick: noop,
  onBackArrowClick: noop,
  onItemClick: noop,
};

export default Sidebar;
