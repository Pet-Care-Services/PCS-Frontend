import React from 'react';
import { isEmpty, map, noop } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import Advertisement from 'components/Advertisement';
import Filters from 'components/Filters';
import { getFiltersFields } from './consts';
import { filtersInitialValuesShape, dataShape } from './shapes';
import styles from './styles';
import { getFiltersValidation } from './validation';

const ListView = ({
  filtersInitialValues,
  onFiltersSubmit,
  onFiltersClear,
  data,
  isLoading,
}) => {
  const { t } = useTranslation();

  return (
    <Box sx={styles.root}>
      <Box sx={styles.filtersWrapper}>
        <Filters
          rows={getFiltersFields(t)}
          initialValues={filtersInitialValues}
          validationSchema={getFiltersValidation(t)}
          onSubmit={onFiltersSubmit}
          onClear={onFiltersClear}
        />
      </Box>
      <Box sx={styles.contentWrapper}>
        {isLoading && (
          <Box sx={styles.centered}>
            {/* TODO put real Loader here */}
            <Typography>{t('loading')}</Typography>
          </Box>
        )}
        {!isLoading && isEmpty(data) && (
          <Box sx={styles.centered}>
            {/* TODO put EmptyState here */}
            <Typography>{t('noResults')}</Typography>
          </Box>
        )}
        {map(data, (adverisement, index) => (
          <Advertisement key={index} {...adverisement} />
        ))}
      </Box>
    </Box>
  );
};

ListView.propTypes = {
  filtersInitialValues: filtersInitialValuesShape.isRequired,
  isLoading: PropTypes.bool.isRequired,
  data: dataShape,
  onFiltersSubmit: PropTypes.func,
  onFiltersClear: PropTypes.func,
};

ListView.defaultProps = {
  onFiltersSubmit: noop,
  onFiltersClear: noop,
  data: [],
};

export default ListView;
