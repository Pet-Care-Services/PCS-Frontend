import React from 'react';
import { isArray, map } from 'lodash';
import { Box } from '@mui/system';
import Field from '../Field';
import styles from './styles';

const MappedRows = ({ rows }) =>
  map(rows, (row, index) => {
    if (isArray(row)) {
      return (
        <Box sx={styles.horizontalFieldsWrapper} key={index}>
          {map(row, (field) => (
            <Field {...field} key={field.name} />
          ))}
        </Box>
      );
    }

    return <Field {...row} key={index} />;
  });

export default MappedRows;
