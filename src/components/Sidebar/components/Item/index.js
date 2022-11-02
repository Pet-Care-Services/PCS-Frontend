import React, { useState } from 'react';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Icon from 'components/Icon';

const Item = ({ iconSrc, title, active, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const activeStyles = {
    backgroundColor: (theme) => theme.palette.white,
    color: (theme) => theme.palette.black,
  };

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
        transition: (theme) => theme.transition.fast,
        color: (theme) => theme.palette.white,
        '&:hover': activeStyles,
        ...(active && activeStyles),
      }}
      onClick={onClick}
    >
      {
        <Icon
          Component="img"
          componentProps={{ src: iconSrc }}
          active={active || isHovered}
        />
      }
      {title}
    </Box>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  iconSrc: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

Item.defaultProps = {
  onClick: noop,
  active: false,
};

export default Item;
