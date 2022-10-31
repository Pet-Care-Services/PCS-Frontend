import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { get, noop } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Button from 'components/Button';
import Input from 'components/Input';
import Loader from 'components/Loader';
import Select from 'components/Select';
import WeekAvailability from 'components/WeekAvailability';
import { daysAvailabilitiesShape } from 'components/WeekAvailability/shapes';
import getPriceTypeToAbbreviationMap from 'consts/getPriceTypeToAbbreviationMap';
import optionsShape from 'shapes/optionsShape';
import priceTypeShape from 'shapes/priceTypeShape';
import stringOrNumberShape from 'shapes/stringOrNumberShape';
import styles from '../styles';
import getValidation from './validation';

const ServiceOfferCreatorView = ({
  animalOptions,
  activityOptions,
  onSubmit,
  initialValues,
  onAnimalChange,
  onActivityChange,
  onWeekChange,
  isAnimalSelected,
  isSingleServiceFetched,
  isLoading,
  isLoadingWeek,
  image,
  priceType,
  description,
  weekAvailability,
}) => {
  const { t } = useTranslation();
  const [isNegotiatingPrice, setIsNegotiatingPrice] = useState(false);
  const priceTypeToAbbreviationMap = getPriceTypeToAbbreviationMap(t);

  const inputAdornment = `${t('currency.pln')}${
    priceTypeToAbbreviationMap[priceType]
  }`;

  return (
    <Box sx={styles.root}>
      <Box sx={styles.sideColumn}>
        <Box component="img" src={image} sx={styles.image} />
        <Typography variant="body">{description}</Typography>
      </Box>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={getValidation(t)}
        validateOnChange={false}
        validateOnBlur={false}
        enableReinitialize
      >
        {({ setFieldValue }) => (
          <Box component={Form} sx={styles.form}>
            <Select
              label={t('animalLabel')}
              name="animalId"
              options={animalOptions}
              onChange={(e) => {
                setFieldValue('activityId', '');
                const animalId = e.target.value;
                onAnimalChange(animalId);
              }}
            />
            {isAnimalSelected && (
              <Select
                label={t('service')}
                name="activityId"
                options={activityOptions}
                onChange={(e) => {
                  const activityId = e.target.value;
                  onActivityChange(activityId);
                }}
              />
            )}

            {isSingleServiceFetched && (
              <>
                <Box sx={styles.rowFields}>
                  <Input
                    label={t('price')}
                    name="price"
                    onlyNumbers
                    endAdornment={
                      <Box sx={styles.inputAdornment}>{inputAdornment}</Box>
                    }
                    disabled={!isNegotiatingPrice}
                  />
                  <Button
                    onClick={() => {
                      if (isNegotiatingPrice) {
                        setFieldValue('price', initialValues.price);
                      }
                      setIsNegotiatingPrice((v) => !v);
                    }}
                    small
                  >
                    {t(isNegotiatingPrice ? 'default' : 'negotiate')}
                  </Button>
                </Box>

                <WeekAvailability
                  name="weekAvailability"
                  daysAvailabilities={get(
                    weekAvailability,
                    'daysAvailabilities'
                  )}
                  isLoading={isLoadingWeek}
                  dateFrom={get(weekAvailability, 'dateFrom')}
                  onArrowClick={onWeekChange}
                />
              </>
            )}
            {isLoading && <Loader />}
            {isSingleServiceFetched && (
              <Button type="submit" sx={styles.submit}>
                {t('submit')}
              </Button>
            )}
          </Box>
        )}
      </Formik>
    </Box>
  );
};

ServiceOfferCreatorView.propTypes = {
  initialValues: PropTypes.shape({
    price: PropTypes.number,
    animalId: stringOrNumberShape,
    activityId: stringOrNumberShape,
    weekAvailability: PropTypes.shape({}),
  }).isRequired,
  animalOptions: optionsShape.isRequired,
  activityOptions: optionsShape.isRequired,
  onSubmit: PropTypes.func,
  onAnimalChange: PropTypes.func,
  onActivityChange: PropTypes.func,
  onWeekChange: PropTypes.func,
  isAnimalSelected: PropTypes.bool,
  isSingleServiceFetched: PropTypes.bool,
  isLoading: PropTypes.bool,
  isLoadingWeek: PropTypes.bool,
  image: PropTypes.string,
  description: PropTypes.string,
  priceType: priceTypeShape,
  weekAvailability: PropTypes.shape({
    daysAvailabilities: daysAvailabilitiesShape,
    dateFrom: PropTypes.instanceOf(Date),
  }),
};

ServiceOfferCreatorView.defaultProps = {
  onSubmit: noop,
  onAnimalChange: noop,
  onActivityChange: noop,
  onWeekChange: noop,
  isAnimalSelected: false,
  isSingleServiceFetched: false,
  isLoading: false,
  isLoadingWeek: false,
  image: '',
};

export default ServiceOfferCreatorView;
