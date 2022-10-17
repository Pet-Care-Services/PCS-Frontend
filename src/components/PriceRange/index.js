import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import priceTypeShape from 'shapes/priceTypeShape';

const PriceRange = ({ from, to, type, currency, textVariant }) => {
  const { t } = useTranslation();
  const typeIntervalMap = {
    SINGLE: '',
    HOURLY: '/h',
    DAILY: `/${t('day')}`,
  };

  const intervalEnd = to != null && to !== from ? '-' + to : '';
  const intervalType = typeIntervalMap[type];
  const priceInterval = from + intervalEnd + currency + intervalType;

  return <Typography variant={textVariant}>{priceInterval}</Typography>;
};

PriceRange.propTypes = {
  from: PropTypes.number.isRequired,
  to: PropTypes.number,
  type: priceTypeShape,
  currency: PropTypes.string,
  textVariant: PropTypes.string,
};

PriceRange.defaultProps = {
  to: null,
  type: 'SINGLE',
  currency: 'zł',
  textVariant: 'h1',
};

//TODO [PCS-22] Currencies

export default PriceRange;
