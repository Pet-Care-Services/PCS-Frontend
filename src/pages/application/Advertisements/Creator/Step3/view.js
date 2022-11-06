import React from 'react';
import { Form, Formik } from 'formik';
import { forEach, noop } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Autocomplete from 'components/Autocomplete';
import Button from 'components/Button';
import FileUpload from 'components/FileUpload';
import Input from 'components/Input';
import Select from 'components/Select';
import TileWrapper from 'components/TileWrapper';
import optionsShape from 'shapes/optionsShape';
import ActivitiesFieldArray from './components/ActivitiesFieldArray';
import AvailabilitiesFieldArray from './components/AvailabilitiesFieldArray';
import { initialValuesShape } from './shapes';
import styles from './styles';
import getValidation from './validation';

const Step3 = ({
  onSubmit,
  activitiesOptions,
  priceTypeOptions,
  periodOptions,
  initialValues,
  isService,
  getAddressOptions,
  addressOptions,
  isLoadingAddressOptions,
  getCityOptions,
  cityOptions,
  isLoadingCityOptions,
}) => {
  const { t } = useTranslation();

  return (
    <TileWrapper sx={styles.root}>
      <Formik
        initialValues={initialValues}
        validationSchema={getValidation(t, isService)}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={onSubmit}
      >
        {({ values, errors, setFieldValue }) => (
          <Box component={Form} sx={styles.form}>
            <Typography variant="h2">{t('information')}</Typography>
            <Box sx={styles.spaceBetween}>
              <ActivitiesFieldArray
                activitiesOptions={activitiesOptions}
                errors={errors}
                activities={values.activities}
              />
              {/* TODO activity tags as list */}
              <Box
                component="img"
                src={values.image.localUrl}
                sx={styles.image}
              />
            </Box>
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
            <Box sx={styles.multiFieldLine}>
              <Autocomplete
                label={t('address')}
                name="location.address"
                options={addressOptions}
                isLoading={isLoadingAddressOptions}
                onChange={(event) => {
                  forEach(event.target.set, ({ field, value }) => {
                    setFieldValue(field, value);
                  });
                  getAddressOptions(event.target.value);
                }}
                sx={styles.field}
              />
              <Input
                label={t('flatNumber')}
                name="location.flatNumber"
                helperText={t('optional')}
                sx={styles.narrowField}
              />
              {isService && (
                <Input
                  label={t('radius')}
                  name="pin.radius"
                  endAdornment={
                    <Typography variant="h3" sx={styles.inputAdornment}>
                      {t('distance.m')}
                    </Typography>
                  }
                  sx={styles.narrowField}
                  onlyNumbers
                />
              )}
            </Box>
            <Box sx={styles.multiFieldLine}>
              <Autocomplete
                label={t('city')}
                name="location.city"
                options={cityOptions}
                isLoading={isLoadingCityOptions}
                onChange={(event) => {
                  getCityOptions(event.target.value);
                }}
                sx={styles.field}
              />
              <Input
                label={t('postalCode')}
                name="location.postalCode"
                maxLength={5}
                onlyNumbers
                sx={styles.narrowField}
              />
            </Box>
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
            <FileUpload name="image" label={t('choosePhoto')} />

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
    </TileWrapper>
  );
};

Step3.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isService: PropTypes.bool.isRequired,
  activitiesOptions: optionsShape,
  priceTypeOptions: optionsShape,
  periodOptions: optionsShape,
  getAddressOptions: PropTypes.func,
  addressOptions: optionsShape,
  isLoadingAddressOptions: PropTypes.bool,
  getCityOptions: PropTypes.func,
  cityOptions: optionsShape,
  isLoadingCityOptions: PropTypes.bool,
  initialValues: initialValuesShape,
};

Step3.defaultProps = {
  activitiesOptions: [],
  priceTypeOptions: [],
  periodOptions: [],
  addressOptions: [],
  isLoadingAddressOptions: false,
  getAddressOptions: noop,
  cityOptions: [],
  isLoadingCityOptions: false,
  getCityOptions: noop,
  initialValues: {},
};

export default Step3;
