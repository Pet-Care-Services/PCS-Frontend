import React from 'react';
import { Formik, Form } from 'formik';
import { isArray, map, noop } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Button from 'components/Button';
import TileWrapper from 'components/TileWrapper';
import Field from './components/Field';
import { rowsShape } from './shapes';
import styles from './styles';

const Filters = ({
  rows,
  initialValues,
  validationSchema,
  onSubmit,
  onClear,
}) => {
  const { t } = useTranslation();

  return (
    <TileWrapper sx={styles.root}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {({ resetForm }) => (
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
              <Box sx={styles.buttons}>
                <Button
                  color="neutral"
                  onClick={() => {
                    resetForm();
                    onClear();
                  }}
                  sx={styles.submitButton}
                >
                  {t('clear')}
                </Button>
                <Button type="submit" sx={styles.submitButton}>
                  {t('apply')}
                </Button>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </TileWrapper>
  );
};

Filters.propTypes = {
  rows: rowsShape.isRequired,
  initialValues: PropTypes.object,
  validationSchema: PropTypes.object,
  onSubmit: PropTypes.func,
  onClear: PropTypes.func,
};

Filters.defaultProps = {
  initialValues: {},
  validationSchema: null,
  onSubmit: noop,
  onClear: noop,
};

export default Filters;
