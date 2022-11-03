import React, { useEffect, useState } from 'react';
import { findIndex, isEmpty, map, noop } from 'lodash';
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
import { ENV, ITEM_TYPE } from 'consts/enums';
import useURLParams from 'hooks/useURLParams';
import { markersShape } from 'shapes/markerShapes';
import optionsShape from 'shapes/optionsShape';
import { getFiltersFields } from './consts';
import { filtersInitialValuesShape, dataShape, itemTypeShape } from './shapes';
import styles from './styles';
import { getFiltersValidation } from './validation';

const ListView = ({
  filtersInitialValues,
  onFiltersSubmit,
  onFiltersClear,
  onMarkerClick,
  data,
  markers,
  animalsOptions,
  activitiesOptions,
  isLoading,
  itemType,
}) => {
  const { t } = useTranslation();
  const [expandedAdvertisementIndex, setExpandedAdvertisementIndex] =
    useState(null);
  const [isMapVisible, setIsMapVisible] = useState(false);
  const { params, updateParams } = useURLParams();

  useEffect(() => {
    if (expandedAdvertisementIndex !== null) {
      setExpandedAdvertisementIndex(null);
    }
  }, [itemType]);

  useEffect(() => {
    const expandedParam = params.expanded;
    const index = findIndex(data, ({ servicesIndices, id }) =>
      isService ? `${servicesIndices}` === expandedParam : expandedParam === id
    );

    if (index >= 0) {
      setExpandedAdvertisementIndex(index);
    }
  }, [params.expanded]);

  const isService = itemType === ITEM_TYPE.SERVICE;

  const isMapMountedInHTML =
    isMapVisible || process.env.REACT_APP_ENV === ENV.PRODUCTION;

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
            {isMapMountedInHTML && (
              <Map
                markers={markers}
                onMarkerClick={(...args) => {
                  setIsMapVisible(false);
                  onMarkerClick(...args);
                }}
                sx={styles.map}
              />
            )}
          </TileWrapper>
        </Collapse>
        {isLoading && <Loader />}
        {!isLoading && isEmpty(data) && (
          <Box sx={styles.centered}>
            {/* TODO put EmptyState here */}
            <Typography>{t('noResults')}</Typography>
          </Box>
        )}
        {map(data, (advertisement, index) => (
          <Advertisement
            key={index}
            {...advertisement}
            isService={isService}
            isExpanded={expandedAdvertisementIndex === index}
            onBoxClick={() => {
              if (index === expandedAdvertisementIndex) {
                setExpandedAdvertisementIndex(null);
                if (params.expanded) {
                  updateParams({ expanded: '' });
                }
              } else {
                setExpandedAdvertisementIndex(index);
              }
            }}
            onContactClick={advertisement.onContactClick}
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
  markers: markersShape,
  onFiltersSubmit: PropTypes.func,
  onFiltersClear: PropTypes.func,
  onMarkerClick: PropTypes.func,
  animalsOptions: optionsShape,
  activitiesOptions: optionsShape,
};

ListView.defaultProps = {
  onFiltersSubmit: noop,
  onFiltersClear: noop,
  onMarkerClick: noop,
  data: [],
  markers: [],
  animalsOptions: [],
  activitiesOptions: [],
};

export default ListView;
