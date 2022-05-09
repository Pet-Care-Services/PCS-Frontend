import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const PriceInterval = ({ price, priceTo, priceType, currency }) => {
  const intervalEnd = priceTo != null && priceTo !== price ? '-' + priceTo : '';
  const intervalType = priceType === 'single' ? '' : '/h';
  const priceInterval = price + intervalEnd + currency + intervalType;
  return <Typography variant="h2">{priceInterval}</Typography>;
};

PriceInterval.propTypes = {
  price: PropTypes.number.isRequired,
  priceTo: PropTypes.number,
  priceType: PropTypes.oneOf(['single', 'hourly']),
  currency: PropTypes.string,
};

PriceInterval.defaultProps = {
  priceTo: null,
  priceType: 'single',
  currency: 'zł',
};

//TODO [PCS-22] Currencies

export default PriceInterval;
