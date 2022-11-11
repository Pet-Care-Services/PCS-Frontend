import React from 'react';
import PropTypes from 'prop-types';
import { Rating as MUIRating } from '@mui/material';

const Rating = ({ value, size }) => (
  <MUIRating name="read-only" value={value} size={size} readOnly />
);

Rating.propTypes = {
  value: PropTypes.number,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Rating.defaultProps = {
  value: 0,
  size: 'medium',
};

export default Rating;
