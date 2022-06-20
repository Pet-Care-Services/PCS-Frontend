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
import ActivitiesFieldArray from './components/ActivitiesFieldArray';
import AvailabilitiesFieldArray from './components/AvailabilitiesFieldArray';
import styles from './styles';
import getValidation from './validation';

const Step3 = ({
  onSubmit,
  activitiesOptions,
  priceTypeOptions,
  periodOptions,
  initialValues,
  isService,
}) => {
  const { t } = useTranslation();

  return (
    <Box sx={styles.root}>
      <Formik
        initialValues={initialValues}
        validationSchema={getValidation(t, isService)}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={onSubmit}
      >
        {({ values, errors }) => (
          <Box component={Form} sx={styles.form}>
            <Typography variant="h2">{t('information')}</Typography>
            <ActivitiesFieldArray
              activitiesOptions={activitiesOptions}
              errors={errors}
              activities={values.activities}
            />
            {/* TODO activity tags as list */}
            <Box sx={styles.multiFieldLine}>
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
                label={t('type')}
                name="price.type"
                options={priceTypeOptions}
                sx={styles.narrowField}
              />
            </Box>
            <Input label={t('location')} name="location" sx={styles.field} />
            {!isService && (
              <Input
                label={t('description')}
                name="description"
                multiline
                sx={styles.fullWidthField}
              />
            )}
            {isService && (
              <Input
                label={t('animalQuantity')}
                name="capacity"
                sx={styles.field}
                onlyNumbers
              />
            )}

            <Typography variant="h2">{t('availability')}</Typography>
            <AvailabilitiesFieldArray
              periodOptions={periodOptions}
              availabilities={values.availabilities}
              errors={errors}
            />

            <Button type="submit" sx={styles.submitButton}>
              {t('publish')}
            </Button>
          </Box>
        )}
      </Formik>
    </Box>
  );
};

Step3.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isService: PropTypes.bool.isRequired,
  activitiesOptions: optionsShape,
  priceTypeOptions: optionsShape,
  periodOptions: optionsShape,
  initialValues: PropTypes.shape({
    activity: PropTypes.string,
    price: PropTypes.exact({
      amount: PropTypes.string,
      type: PropTypes.string,
    }),
    location: PropTypes.string,
    availabilities: PropTypes.arrayOf(
      PropTypes.shape({
        from: PropTypes.string,
        to: PropTypes.string,
        cyclic: PropTypes.bool,
        period: PropTypes.string,
      })
    ),
    capacity: PropTypes.string,
  }),
};

Step3.defaultProps = {
  activitiesOptions: [],
  priceTypeOptions: [],
  periodOptions: [],
  initialValues: {},
};

export default Step3;
