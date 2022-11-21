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
import useBreakpoints from 'hooks/useBreakpoints';
import optionsShape from 'shapes/optionsShape';
import priceTypeShape from 'shapes/priceTypeShape';
import stringOrNumberShape from 'shapes/stringOrNumberShape';
import commonStyles from '../styles';
import styles from './styles';
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
  const { isSmallScreen } = useBreakpoints();
  const [isNegotiatingPrice, setIsNegotiatingPrice] = useState(false);
  const priceTypeToAbbreviationMap = getPriceTypeToAbbreviationMap(t);

  const inputAdornment = `${t('currency.pln')}${
    priceTypeToAbbreviationMap[priceType]
  }`;

  const descriptionView = <Typography variant="body">{description}</Typography>;

  return (
    <Box sx={commonStyles.root}>
      <Box sx={commonStyles.sideColumn}>
        <Box
          component="img"
          src={image}
          sx={[commonStyles.image, styles.imageInService]}
        />
        {!isSmallScreen && descriptionView}
      </Box>
      {isSmallScreen && descriptionView}
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={getValidation(t)}
        validateOnChange={false}
        validateOnBlur={false}
        enableReinitialize
      >
        {({ setFieldValue }) => (
          <Box
            component={Form}
            sx={[commonStyles.form, commonStyles.fieldsWrapper]}
          >
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
              <Box sx={commonStyles.fieldsWrapper}>
                <Box sx={commonStyles.rowFields}>
                  <Input
                    label={t('price')}
                    name="price"
                    onlyNumbers
                    endAdornment={
                      <Box sx={commonStyles.inputAdornment}>
                        {inputAdornment}
                      </Box>
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
                <Input
                  label={t('message')}
                  name="message"
                  helperText={t('optional')}
                  multiline
                />

                <Box sx={commonStyles.availabilityWrapper}>
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
                </Box>
              </Box>
            )}
            {isLoading && <Loader />}
            {isSingleServiceFetched && (
              <Button type="submit" sx={commonStyles.submit}>
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
