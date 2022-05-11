import React from 'react';
import { Formik, Form } from 'formik';
import { Box } from '@mui/system';

const Filters = () => {
  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <Formik>
        <Form>Filters</Form>
      </Formik>
    </Box>
  );
};

export default Filters;
