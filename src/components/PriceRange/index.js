import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import priceTypeShape from 'shapes/priceTypeShape';

const PriceRange = ({ from, to, type, currency }) => {
  const intervalEnd = to != null && to !== from ? '-' + to : '';
  const intervalType = type === 'single' ? '' : '/h';
  const priceInterval = from + intervalEnd + currency + intervalType;
  return <Typography variant="h2">{priceInterval}</Typography>;
};

PriceRange.propTypes = {
  from: PropTypes.number.isRequired,
  to: PropTypes.number,
  type: priceTypeShape,
  currency: PropTypes.string,
};

PriceRange.defaultProps = {
  to: null,
  type: 'single',
  currency: 'zł',
};

//TODO [PCS-22] Currencies

export default PriceRange;
