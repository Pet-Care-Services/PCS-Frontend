import React from 'react';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Filters from 'components/Filters';
import { filtersFields } from './consts';
import { itemTypeShape, filtersInitialValuesShape } from './shapes';

const ListView = ({ itemType, filtersInitialValues, onFiltersSubmit }) => {
  return (
    <Box sx={{ width: '100%', height: '100%', display: 'flex', columnGap: 20 }}>
      <Box sx={{ flex: 1 }}>
        <Filters
          rows={filtersFields}
          initialValues={filtersInitialValues}
          onSubmit={onFiltersSubmit}
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
};

ListView.defaultProps = {
  onFiltersSubmit: noop,
};

export default ListView;
