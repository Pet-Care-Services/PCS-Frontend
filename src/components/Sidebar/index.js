import React from 'react';
import { filter, map, noop } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import ArrowBackIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box, Drawer } from '@mui/material';
import Button from 'components/Button';
import Icon from 'components/Icon';
import LanguageSwitch from 'components/LanguageSwitch';
import useDialog from 'hooks/useDialog';
import useSidebar from 'hooks/useSidebar';
import useUserData from 'hooks/useUserData';
import Login from 'templates/Login';
import Item from './components/Item';
import styles from './styles';

const Sidebar = ({ items, open, isLoggedIn, onBackClick, onItemClick }) => {
  const { t } = useTranslation();
  const { closeSidebar } = useSidebar();
  const { openDialog } = useDialog();
  const { clearUserData } = useUserData();

  const onLoginClick = () => {
    closeSidebar();
    openDialog(<Login />);
  };

  const onLogoutClick = () => {
    closeSidebar();
    clearUserData();
  };

  const visibleItems = filter(
    items,
    (item) => !item.isLoginRequired || isLoggedIn
  );

  return (
    <Drawer
      anchor="left"
      open={open}
      PaperProps={{
        sx: styles.paper,
      }}
      onClose={closeSidebar}
    >
      <Box sx={styles.topIconsWrapper}>
        <LanguageSwitch />
        <Icon Component={ArrowBackIcon} onClick={onBackClick} />
      </Box>
      <Box sx={styles.itemsWrapper}>
        {map(visibleItems, (item) => (
          <Item
            key={item.id}
            title={t(item.titleKey)}
            Icon={item.Icon}
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
    </Drawer>
  );
};

Sidebar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      titleKey: PropTypes.string,
      Icon: PropTypes.elementType,
      onClick: PropTypes.func,
      isLoginRequired: PropTypes.bool,
    })
  ),
  isLoggedIn: PropTypes.bool,
  onBackClick: PropTypes.func,
  onItemClick: PropTypes.func,
  open: PropTypes.bool,
};

Sidebar.defaultProps = {
  items: [],
  isLoggedIn: false,
  onBackClick: noop,
  open: false,
};

export default Sidebar;
