import React from 'react';
import { Field as FormikField } from 'formik';
import PropTypes from 'prop-types';
import { Rating as MUIRating, Typography } from '@mui/material';

const Rating = ({ name, value, isFormField, ...props }) => {
  if (!isFormField) {
    return <MUIRating name={name} value={value} readOnly />;
  } else {
    return (
      <FormikField name={name} {...props}>
        {({ field: { value }, form: { setFieldValue }, meta: { error } }) => (
          <>
            <MUIRating
              name={name}
              value={value}
              onChange={(e, newValue) => {
                setFieldValue(name, newValue);
              }}
            />
            {error && (
              <Typography
                variant="tiny"
                sx={{ color: (theme) => theme.palette.error.main }}
              >
                {error}
              </Typography>
            )}
          </>
        )}
      </FormikField>
    );
  }
};

Rating.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
  isFormField: PropTypes.bool,
};

Rating.defaultProps = {
  name: 'rating',
  value: 0,
  isFormField: false,
};

export default Rating;
