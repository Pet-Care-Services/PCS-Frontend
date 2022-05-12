import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';

const FormikField = ({ Component, ...props }) => (
  <Field {...props}>
    {({ field, meta }) => (
      <Component {...field} error={meta.error} {...props} />
    )}
  </Field>
);

FormikField.propTypes = {
  Component: PropTypes.elementType,
};

export default FormikField;
