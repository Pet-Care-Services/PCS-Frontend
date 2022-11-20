import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import getPriceTypeToAbbreviationMap from 'consts/getPriceTypeToAbbreviationMap';
import priceTypeShape from 'shapes/priceTypeShape';

const PriceRange = ({
  from,
  to,
  type,
  currency,
  textVariant,
  isTypography,
}) => {
  const { t } = useTranslation();
  const priceTypeAbbreviationMap = getPriceTypeToAbbreviationMap(t);

  const intervalEnd = to != null && to !== from ? '-' + to : '';
  const intervalType = priceTypeAbbreviationMap[type];
  const priceInterval = from + intervalEnd + currency + intervalType;

  const Component = isTypography ? Typography : Box;

  return <Component variant={textVariant}>{priceInterval}</Component>;
};

PriceRange.propTypes = {
  from: PropTypes.number.isRequired,
  to: PropTypes.number,
  type: priceTypeShape,
  currency: PropTypes.string,
  textVariant: PropTypes.string,
  isTypography: PropTypes.bool,
};

PriceRange.defaultProps = {
  to: null,
  type: 'SINGLE',
  currency: 'zł',
  textVariant: 'h1',
  isTypography: true,
};

//TODO [PCS-22] Currencies

export default PriceRange;
