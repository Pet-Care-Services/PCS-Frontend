import React from 'react';
import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Button from 'components/Button';
import Input from 'components/Input';
import Select from 'components/Select';
import { optionsShape } from 'components/Select/shapes';
import styles from './styles';
import getValidation from './validation';

const Step3 = ({
  onSubmit,
  activitiesOptions,
  priceTypeOptions,
  initialValues,
}) => {
  const { t } = useTranslation();

  return (
    <Box sx={styles.root}>
      <Formik
        initialValues={initialValues}
        validationSchema={getValidation(t)}
        onSubmit={onSubmit}
      >
        <Box component={Form} sx={styles.form}>
          <Typography variant="h2">{t('information')}</Typography>
          <Select
            label={t('activity')}
            name="activity"
            options={activitiesOptions}
            sx={styles.field}
          />
          {/* TODO activity tags as list */}
          <Box sx={styles.dualField}>
            <Input
              label={t('price')}
              name="price.amount"
              endAdornment={
                <Typography variant="h3" sx={styles.inputAdornment}>
                  {t('currency.pln')}
                </Typography>
              }
              sx={styles.field}
              onlyNumbers
            />
            <Select
              label={t('priceFor')}
              name="price.type"
              options={priceTypeOptions}
              sx={{ ...styles.field, ...styles.narrowField }}
            />
          </Box>
          <Input label={t('location')} name="location" sx={styles.field} />
          <Typography variant="h2">{t('availability')}</Typography>
          <Typography variant="body">Coming soon...</Typography>
          {/* TODO availability */}
          <Button type="submit" sx={styles.submitButton}>
            {t('publish')}
          </Button>
        </Box>
      </Formik>
    </Box>
  );
};

Step3.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  activitiesOptions: optionsShape,
  priceTypeOptions: optionsShape,
  initialValues: PropTypes.exact({
    activity: PropTypes.string,
    price: PropTypes.exact({
      amount: PropTypes.string,
      type: PropTypes.string,
    }),
    priceType: PropTypes.string,
    location: PropTypes.string,
  }),
};

export default Step3;
