import React from 'react';
import FormikField from 'components/FormikField';
import AutocompleteView from './view';

const Autocomplete = (props) => (
  <FormikField Component={AutocompleteView} {...props} />
);

export default Autocomplete;
