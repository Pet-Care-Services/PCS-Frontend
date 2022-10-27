import React from 'react';
import { Form, Formik } from 'formik';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/system';
import Button from 'components/Button';
import Input from 'components/Input';
import Loader from 'components/Loader';
import Select from 'components/Select';
import availabilitiesShape from 'shapes/availabilitiesShape';
import optionsShape from 'shapes/optionsShape';
import priceShape from 'shapes/priceShape';
import styles from './styles';

const OfferCreatorView = ({
  animalOptions,
  activityOptions,
  onSubmit,
  initialValues,
  onAnimalChange,
  onActivityChange,
  isAnimalSelected,
  isSingleServiceFetched,
  isLoading,
  image,
}) => {
  const { t } = useTranslation();

  return (
    <Box sx={styles.root}>
      <Box sx={styles.sideColumn}>
        <Box component="img" src={image} sx={styles.image} />
      </Box>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
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
            {isLoading && <Loader />}
            {isSingleServiceFetched && (
              <Input label={t('price')} name="price" endAdornment="todo" />
            )}
            {isSingleServiceFetched && (
              <Button type="submit">{t('submit')}</Button>
            )}
          </Box>
        )}
      </Formik>
    </Box>
  );
};

OfferCreatorView.propTypes = {
  initialValues: PropTypes.shape({
    price: PropTypes.number,
  }).isRequired,
  animalOptions: optionsShape.isRequired,
  activityOptions: optionsShape.isRequired,
  onSubmit: PropTypes.func,
  onAnimalChange: PropTypes.func,
  onActivityChange: PropTypes.func,
  price: priceShape,
  availabilities: availabilitiesShape,
  isAnimalSelected: PropTypes.bool,
  isSingleServiceFetched: PropTypes.bool,
  isLoading: PropTypes.bool,
  image: PropTypes.string,
};

OfferCreatorView.defaultProps = {
  onSubmit: noop,
  onAnimalChange: noop,
  onActivityChange: noop,
  isAnimalSelected: false,
  isSingleServiceFetched: false,
  isLoading: false,
  image: '',
};

export default OfferCreatorView;
