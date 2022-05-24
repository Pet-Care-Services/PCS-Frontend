import React from 'react';
import { map, noop } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import ArrowBackIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box, Drawer } from '@mui/material';
import Icon from 'components/Icon';
import Item from './components/Item';
import styles from './styles';

const Sidebar = ({ items, open, onBackClick }) => {
  const { t } = useTranslation();

  return (
    <Drawer
      anchor="left"
      open={open}
      PaperProps={{
        sx: styles.paper,
      }}
    >
      <Box sx={styles.arrowWrapper}>
        <Icon Component={ArrowBackIcon} onClick={onBackClick} />
      </Box>
      <Box sx={styles.itemsWrapper}>
        {map(items, (item) => (
          <Item
            key={item.id}
            title={t(item.titleKey)}
            Icon={item.Icon}
            onClick={item.onClick}
          />
        ))}
      </Box>
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
  open: PropTypes.bool,
};

Sidebar.defaultProps = {
  items: [],
  onBackClick: noop,
  open: false,
};

export default Sidebar;
