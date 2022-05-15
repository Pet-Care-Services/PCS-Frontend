import React from 'react';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';
import Filters from 'components/Filters';
import { getFiltersFields } from './consts';
import { itemTypeShape, filtersInitialValuesShape } from './shapes';
import { getFiltersValidation } from './validation';

const ListView = ({
  itemType,
  filtersInitialValues,
  onFiltersSubmit,
  onFiltersClear,
}) => {
  const { t } = useTranslation();

  return (
    <Box sx={{ width: '100%', height: '100%', display: 'flex', columnGap: 20 }}>
      <Box sx={{ flex: 1 }}>
        <Filters
          rows={getFiltersFields(t)}
          initialValues={filtersInitialValues}
          validationSchema={getFiltersValidation(t)}
          onSubmit={onFiltersSubmit}
          onClear={onFiltersClear}
        />
      </Box>
      <Box
        sx={{
          flex: 3,
          minWidth: 600,
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',
          rowGap: 20,
        }}
      >
        List of {itemType}s here
      </Box>
    </Box>
  );
};

ListView.propTypes = {
  itemType: itemTypeShape.isRequired,
  filtersInitialValues: filtersInitialValuesShape.isRequired,
  onFiltersSubmit: PropTypes.func,
  onFiltersClear: PropTypes.func,
};

ListView.defaultProps = {
  onFiltersSubmit: noop,
  onFiltersClear: noop,
};

export default ListView;
