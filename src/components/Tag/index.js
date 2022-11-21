import React from 'react';
import PropTypes from 'prop-types';
import { Chip, Typography } from '@mui/material';
import useBreakpoints from 'hooks/useBreakpoints';
import colorShape from 'shapes/colorShape';
import sxShape from 'shapes/sxShape';

const Tag = ({ label, color, labelColor, sx }) => {
  const { isMediumScreen } = useBreakpoints();
  return (
    <Chip
      label={
        <Typography variant={isMediumScreen ? 'body' : 'h4'}>
          {label}
        </Typography>
      }
      sx={[
        {
          backgroundColor: color,
          color: labelColor,
          cursor: 'inherit',
          width: 'fit-content',
          height: isMediumScreen ? 22 : 30,
        },
        sx,
      ]}
    />
  );
};

Tag.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  color: colorShape,
  labelColor: colorShape,
  sx: sxShape,
};

Tag.defaultProps = {
  color: (theme) => theme.palette.primary.main,
  labelColor: (theme) => theme.palette.black,
  sx: {},
};

export default Tag;
