import React from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Drawer } from '@mui/material';
import Item from './components/Item';
import styles from './styles';

const Sidebar = ({ items }) => {
  const { t } = useTranslation();

  return (
    <Drawer
      anchor="left"
      open={true}
      PaperProps={{
        sx: styles.paper,
      }}
    >
      <Box sx={styles.arrowWrapper}>
        <ArrowBackIosIcon />
      </Box>
      <Box sx={styles.itemsWrapper}>
        {map(items, (item) => (
          <Item
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
      title: PropTypes.string,
      Icon: PropTypes.elementType,
      onClick: PropTypes.func,
    })
  ),
};

Sidebar.defaultProps = {
  items: [],
};

export default Sidebar;
