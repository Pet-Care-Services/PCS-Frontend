import React from 'react';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const Item = ({ Icon, title, onClick }) => (
  <Box
    sx={{
      width: '100%',
      height: 50,
      display: 'flex',
      alignItems: 'center',
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
      paddingLeft: 20,
      columnGap: 10,
      cursor: 'pointer',
      transition: '0.2s',
      color: (theme) => theme.palette.white,
      '&:hover': {
        backgroundColor: (theme) => theme.palette.white,
        color: (theme) => theme.palette.black,
      },
    }}
    onClick={onClick}
  >
    {<Icon />}
    {title}
  </Box>
);

Item.propTypes = {
  title: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  onClick: PropTypes.func,
};

Item.defaultProps = {
  onClick: noop,
};

export default Item;
