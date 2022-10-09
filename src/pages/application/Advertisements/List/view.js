import React, { useEffect, useState } from 'react';
import { isEmpty, map, noop } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Box, Collapse, Typography } from '@mui/material';
import mapIconSrc from 'assets/icons/map.png';
import Advertisement from 'components/Advertisement';
import Filters from 'components/Filters';
import Icon from 'components/Icon';
import Loader from 'components/Loader';
import Map from 'components/Map';
import TileWrapper from 'components/TileWrapper';
import optionsShape from 'shapes/optionsShape';
import { getFiltersFields } from './consts';
import { filtersInitialValuesShape, dataShape, itemTypeShape } from './shapes';
import styles from './styles';
import { getFiltersValidation } from './validation';

const ListView = ({
  filtersInitialValues,
  onFiltersSubmit,
  onFiltersClear,
  onContactClick,
  data,
  animalsOptions,
  activitiesOptions,
  isLoading,
  itemType,
}) => {
  const { t } = useTranslation();
  const [expandedAdvertisementIndex, setExpandedAdvertisementIndex] =
    useState(null);
  const [isMapVisible, setIsMapVisible] = useState(false);

  useEffect(() => {
    if (expandedAdvertisementIndex !== null) {
      setExpandedAdvertisementIndex(null);
    }
  }, [itemType]);

  const markers = map(data, (advertisement) => ({
    position: {
      lat: advertisement.pin.latitude,
      lng: advertisement.pin.longitude,
    },
    radius: advertisement.pin.radius,
  }));

  return (
    <Box sx={styles.root}>
      <Filters
        rows={getFiltersFields(t, animalsOptions, activitiesOptions)}
        initialValues={filtersInitialValues}
        validationSchema={getFiltersValidation(t)}
        onSubmit={onFiltersSubmit}
        onClear={onFiltersClear}
      />
      <Box sx={styles.contentWrapper}>
        <Icon
          Component="img"
          size="large"
          onClick={() => setIsMapVisible((v) => !v)}
          componentProps={{ src: mapIconSrc, alt: t('map') }}
        />
        <Collapse in={isMapVisible} sx={styles.mapCollapse}>
          <TileWrapper sx={styles.mapWrapper}>
            <Map markers={markers} sx={styles.map} />
          </TileWrapper>
        </Collapse>
        {isLoading && <Loader />}
        {!isLoading && isEmpty(data) && (
          <Box sx={styles.centered}>
            {/* TODO put EmptyState here */}
            <Typography>{t('noResults')}</Typography>
          </Box>
        )}
        {map(data, (adverisement, index) => (
          <Advertisement
            key={index}
            {...adverisement}
            isExpanded={expandedAdvertisementIndex === index}
            onBoxClick={() => {
              if (index === expandedAdvertisementIndex) {
                setExpandedAdvertisementIndex(null);
              } else {
                setExpandedAdvertisementIndex(index);
              }
            }}
            onContactClick={() => onContactClick(adverisement.userId)}
          />
        ))}
      </Box>
    </Box>
  );
};

ListView.propTypes = {
  filtersInitialValues: filtersInitialValuesShape.isRequired,
  isLoading: PropTypes.bool.isRequired,
  itemType: itemTypeShape.isRequired,
  data: dataShape,
  onFiltersSubmit: PropTypes.func,
  onFiltersClear: PropTypes.func,
  onContactClick: PropTypes.func,
  animalsOptions: optionsShape,
  activitiesOptions: optionsShape,
};

ListView.defaultProps = {
  onFiltersSubmit: noop,
  onFiltersClear: noop,
  onContactClick: noop,
  data: [],
  animalsOptions: [],
  activitiesOptions: [],
};

export default ListView;
