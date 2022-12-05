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
import Loader from 'components/Loader';
import Select from 'components/Select';
import TileWrapper from 'components/TileWrapper';
import useBreakpoints from 'hooks/useBreakpoints';
import useUserData from 'hooks/useUserData';
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
  isLoading,
  isLoadingAWSSubmit,
  progressAWSSubmit,
}) => {
  const { t } = useTranslation();
  const { isSmallScreen, isMediumScreen } = useBreakpoints();
  const { imageUrl: userAvatar } = useUserData();

  return (
    <TileWrapper sx={styles.root}>
      <Formik
        initialValues={initialValues}
        validationSchema={getValidation(t, isService)}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={onSubmit}
      >
        {({ values, errors, setFieldValue }) => {
          const imageView = (
            <Box
              component="img"
              src={isService ? userAvatar : values.image.localUrl}
              sx={styles.image}
            />
          );

          return (
            <Box component={Form} sx={styles.form}>
              {isSmallScreen && imageView}
              <Typography variant="h2" sx={styles.headerText}>
                {t('information')}
              </Typography>
              <Box sx={styles.spaceBetween}>
                <ActivitiesFieldArray
                  activitiesOptions={activitiesOptions}
                  errors={errors}
                  activities={values.activities}
                />
                {/* TODO activity tags as list */}
                {!isSmallScreen && imageView}
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
                  sx={isMediumScreen ? styles.fullWidthField : styles.field}
                  onlyNumbers
                />
                <Select
                  label={t('type')}
                  name="price.type"
                  options={priceTypeOptions}
                  sx={
                    isMediumScreen ? styles.fullWidthField : styles.narrowField
                  }
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
                  sx={isMediumScreen ? styles.fullWidthField : styles.field}
                />
                <Input
                  label={t('flatNumber')}
                  name="location.flatNumber"
                  helperText={t('optional')}
                  sx={
                    isMediumScreen ? styles.fullWidthField : styles.narrowField
                  }
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
                    sx={
                      isMediumScreen
                        ? styles.fullWidthField
                        : styles.narrowField
                    }
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
                  sx={isMediumScreen ? styles.fullWidthField : styles.field}
                />
                <Input
                  label={t('postalCode')}
                  name="location.postalCode"
                  maxLength={5}
                  onlyNumbers
                  sx={
                    isMediumScreen ? styles.fullWidthField : styles.narrowField
                  }
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
                  sx={isMediumScreen ? styles.fullWidthField : styles.field}
                  onlyNumbers
                />
              )}
              {!isService && (
                <FileUpload name="image" label={t('choosePhoto')} />
              )}

              <Typography variant="h2" sx={styles.headerText}>
                {t('availability')}
              </Typography>
              <AvailabilitiesFieldArray
                periodOptions={periodOptions}
                availabilities={values.availabilities}
                errors={errors}
              />

              <Button type="submit" sx={styles.submitButton}>
                {t('publish')}
              </Button>
              {isLoadingAWSSubmit && <Loader progress={progressAWSSubmit} />}
              {isLoading && <Loader />}
            </Box>
          );
        }}
      </Formik>
    </TileWrapper>
  );
};

Step3.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isService: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isLoadingAWSSubmit: PropTypes.bool.isRequired,
  progressAWSSubmit: PropTypes.number.isRequired,
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
