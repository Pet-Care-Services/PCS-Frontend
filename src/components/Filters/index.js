import React from 'react';
import { Formik, Form } from 'formik';
import { isArray, map, noop } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Button from 'components/Button';
import Field from './components/Field';
import { rowsShape } from './shapes';
import styles from './styles';

const Filters = ({ rows, initialValues, onSubmit }) => {
  const { t } = useTranslation();

  return (
    <Box sx={styles.root}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Box sx={styles.formContent}>
            <Typography variant="h2">{t('filters')}</Typography>
            {map(rows, (row, index) => {
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
            })}
            <Button sx={styles.submitButton} submit>
              {t('apply')}
            </Button>
          </Box>
        </Form>
      </Formik>
    </Box>
  );
};

Filters.propTypes = {
  rows: rowsShape.isRequired,
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func,
};

Filters.defaultProps = {
  initialValues: {},
  onSubmit: noop,
};

export default Filters;
