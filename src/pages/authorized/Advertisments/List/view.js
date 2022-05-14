import React from 'react';
import { Box } from '@mui/material';
import Filters from 'components/Filters';
import { itemTypeShape } from './shapes';

const ListView = ({ itemType }) => {
  return (
    <Box sx={{ width: '100%', height: '100%', display: 'flex', columnGap: 20 }}>
      <Box sx={{ flex: 1, minWidth: 200, backgroundColor: 'white' }}>
        <Filters />
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
};

export default ListView;
