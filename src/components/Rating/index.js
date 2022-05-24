import React from 'react';
import PropTypes from 'prop-types';
import { Rating as MUIRating } from '@mui/material';

const Rating = ({ value }) => (
  <MUIRating name="read-only" value={value} readOnly />
);

Rating.propTypes = {
  value: PropTypes.number,
};

Rating.defaultProps = {
  value: 0,
};

export default Rating;
