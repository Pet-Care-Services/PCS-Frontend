import React from 'react';
import { map, noop } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import ArrowBackIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box, Drawer } from '@mui/material';
import Button from 'components/Button';
import Icon from 'components/Icon';
import LanguageSwitch from 'components/LanguageSwitch';
import useDialog from 'hooks/useDialog';
import useSidebar from 'hooks/useSidebar';
import Login from 'templates/Login';
import Item from './components/Item';
import styles from './styles';

const Sidebar = ({ items, open, onBackClick, onItemClick }) => {
  const { t } = useTranslation();
  const { closeSidebar } = useSidebar();
  const { openDialog } = useDialog();

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
        {map(items, (item) => (
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
        onClick={() => {
          closeSidebar();
          openDialog(<Login />);
        }}
        sx={styles.loginButton}
      >
        {t('login')}
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
    })
  ),
  onBackClick: PropTypes.func,
  onItemClick: PropTypes.func,
  open: PropTypes.bool,
};

Sidebar.defaultProps = {
  items: [],
  onBackClick: noop,
  open: false,
};

export default Sidebar;
