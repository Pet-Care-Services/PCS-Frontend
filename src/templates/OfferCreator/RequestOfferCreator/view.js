import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { map, noop } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Button from 'components/Button';
import Input from 'components/Input';
import Loader from 'components/Loader';
import Tag from 'components/Tag';
import TextAvailability from 'components/TextAvailability';
import getPriceTypeToAbbreviationMap from 'consts/getPriceTypeToAbbreviationMap';
import useBreakpoints from 'hooks/useBreakpoints';
import useTheme from 'hooks/useTheme';
import availabilitiesShape from 'shapes/availabilitiesShape';
import dictionaryValueShape from 'shapes/dictionaryValueShape';
import priceTypeShape from 'shapes/priceTypeShape';
import commonStyles from '../styles';
import componentStyles from './styles';
import getValidation from './validation';

const styles = {
  ...commonStyles,
  ...componentStyles,
};

const RequestOfferCreatorView = ({
  image,
  description,
  priceType,
  isLoading,
  initialValues,
  availabilities,
  animal,
  activities,
  onSubmit,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { isSmallScreen } = useBreakpoints();
  const [isNegotiatingPrice, setIsNegotiatingPrice] = useState(false);
  const priceTypeToAbbreviationMap = getPriceTypeToAbbreviationMap(t);

  const inputAdornment = `${t('currency.pln')}${
    priceTypeToAbbreviationMap[priceType]
  }`;

  const descriptionView = <Typography variant="body">{description}</Typography>;

  return (
    <Box sx={styles.root}>
      <Box sx={styles.sideColumn}>
        <Box component="img" src={image} sx={styles.image} />
        <Box sx={styles.tagsAndDescriptionWrapper}>
          <Box sx={styles.tags}>
            <Tag
              label={t(`animal.${animal.name}`)}
              color={theme.palette.neutral.main}
            />
            {map(activities, ({ id, name }) => (
              <Tag
                key={id}
                label={t(`activity.${name}`)}
                color={theme.palette.secondary.dark}
              />
            ))}
          </Box>
          {!isSmallScreen && descriptionView}
        </Box>
      </Box>
      {isSmallScreen && descriptionView}
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={getValidation(t)}
      >
        {({ setFieldValue }) => (
          <Box
            component={Form}
            sx={{ ...styles.form, ...styles.fieldsWrapper }}
          >
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
            <Input
              label={t('message')}
              name="message"
              helperText={t('optional')}
              multiline
            />
            <Typography variant="h2" sx={styles.text}>
              {t('availability')}
            </Typography>
            <TextAvailability availabilities={availabilities} />
            {isLoading && <Loader />}

            <Button type="submit" sx={styles.submit}>
              {t('submit')}
            </Button>
          </Box>
        )}
      </Formik>
    </Box>
  );
};

RequestOfferCreatorView.propTypes = {
  initialValues: PropTypes.shape({
    price: PropTypes.number,
  }).isRequired,
  onSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
  image: PropTypes.string,
  description: PropTypes.string,
  animalName: PropTypes.string,
  priceType: priceTypeShape,
  availabilities: availabilitiesShape,
  animal: dictionaryValueShape,
  activities: PropTypes.arrayOf(dictionaryValueShape),
};

RequestOfferCreatorView.defaultProps = {
  onSubmit: noop,
  isLoading: false,
  image: '',
  animalName: '',
};

export default RequestOfferCreatorView;
