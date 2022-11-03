const getPriceTypeToAbbreviationMap = (t) => ({
  SINGLE: '',
  HOURLY: '/h',
  DAILY: `/${t('day')}`,
});

export default getPriceTypeToAbbreviationMap;
