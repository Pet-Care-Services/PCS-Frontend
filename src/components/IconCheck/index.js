import React from 'react';
import { Field as FormikField } from 'formik';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import sxShape from 'shapes/sxShape';

const IconCheck = ({ Component, name, sx, ...props }) => {
  return (
    <FormikField name={name} {...props}>
      {({ field: { value }, form: { setFieldValue } }) => (
        <Icon
          Component={Component}
          active={value}
          onClick={() => setFieldValue(name, !value)}
          sx={sx}
        />
      )}
    </FormikField>
  );
};

IconCheck.propTypes = {
  Component: PropTypes.elementType.isRequired,
  name: PropTypes.string.isRequired,
  sx: sxShape,
};

IconCheck.defaultProps = {
  sx: {},
};

export default IconCheck;
