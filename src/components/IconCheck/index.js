import React from 'react';
import { Field as FormikField } from 'formik';
import PropTypes from 'prop-types';
import IconCheckView from './view';

const IconCheck = ({ Component, name, ...props }) => {
  return (
    <FormikField name={name} {...props}>
      {({ field: { value }, form: { setFieldValue } }) => (
        <IconCheckView
          Component={Component}
          active={value}
          onClick={() => setFieldValue(name, !value)}
          {...props}
        />
      )}
    </FormikField>
  );
};

IconCheck.propTypes = {
  Component: PropTypes.elementType.isRequired,
  name: PropTypes.string.isRequired,
};

export default IconCheck;
