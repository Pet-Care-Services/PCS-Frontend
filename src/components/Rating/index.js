import React from 'react';
import { Field as FormikField } from 'formik';
import PropTypes from 'prop-types';
import { Rating as MUIRating, Typography } from '@mui/material';

const Rating = ({ name, value, size, isFormField, ...props }) => {
  if (!isFormField) {
    return (
      <MUIRating
        name={name}
        value={value}
        size={size}
        precision={0.1}
        readOnly
        sx={{
          '.MuiRating-iconEmpty': {
            color: (theme) => theme.palette.neutral.dark,
          },
        }}
      />
    );
  } else {
    return (
      <FormikField name={name} {...props}>
        {({ field: { value }, form: { setFieldValue }, meta: { error } }) => (
          <>
            <MUIRating
              name={name}
              value={value}
              size={size}
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
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  isFormField: PropTypes.bool,
};

Rating.defaultProps = {
  name: 'rating',
  value: 0,
  size: 'medium',
  isFormField: false,
};

export default Rating;
