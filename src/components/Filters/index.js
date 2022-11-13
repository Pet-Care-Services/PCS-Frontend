import React from 'react';
import { Formik, Form } from 'formik';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Button from 'components/Button';
import TileWrapper from 'components/TileWrapper';
import MappedRows from './components/MappedRows';
import { rowsShape } from './shapes';
import styles from './styles';

const Filters = ({
  filtersRows,
  optionsRows,
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
              <MappedRows rows={filtersRows} />

              <Typography variant="h2">{t('options')}</Typography>
              <MappedRows rows={optionsRows} />

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
  filtersRows: rowsShape.isRequired,
  optionsRows: rowsShape.isRequired,
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
