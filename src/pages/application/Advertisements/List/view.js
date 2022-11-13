import React, { useEffect, useState } from 'react';
import { findIndex, isEmpty, map, noop, toString } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import InfiniteScroll from 'react-infinite-scroller';
import { Box, Collapse, Typography } from '@mui/material';
import Advertisement from 'components/Advertisement';
import Filters from 'components/Filters';
import Loader from 'components/Loader';
import Map from 'components/Map';
import TileWrapper from 'components/TileWrapper';
import { ENV, ITEM_TYPE } from 'consts/enums';
import useURLParams from 'hooks/useURLParams';
import useUserData from 'hooks/useUserData';
import { markersShape } from 'shapes/markerShapes';
import optionsShape from 'shapes/optionsShape';
import { getFiltersFields, getOptionsFields } from './consts';
import { filtersInitialValuesShape, dataShape, itemTypeShape } from './shapes';
import styles from './styles';
import { compareArrayWithString } from './utils';
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
  onLoadMore,
  hasNextPage,
}) => {
  const { t } = useTranslation();
  const [expandedAdvertisementIndex, setExpandedAdvertisementIndex] =
    useState(null);
  const [isMapVisible, setIsMapVisible] = useState(false);
  const { params, updateParams } = useURLParams();
  const { userId } = useUserData();

  useEffect(() => {
    if (expandedAdvertisementIndex !== null) {
      setExpandedAdvertisementIndex(null);
    }
  }, [itemType]);

  useEffect(() => {
    const expandedParam = params.expanded;

    const index = findIndex(data, ({ servicesIndices, requestId }) =>
      isService
        ? compareArrayWithString(servicesIndices, expandedParam)
        : toString(expandedParam) === toString(requestId)
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
      <Box sx={styles.filtersWrapper}>
        <Filters
          filtersRows={getFiltersFields(t, animalsOptions, activitiesOptions)}
          optionsRows={getOptionsFields(
            t,
            () => setIsMapVisible((v) => !v),
            isMapVisible
          )}
          initialValues={filtersInitialValues}
          validationSchema={getFiltersValidation(t)}
          onSubmit={onFiltersSubmit}
          onClear={onFiltersClear}
        />
      </Box>
      <Box sx={{ ...styles.contentWrapper, ...styles.flexColumn }}>
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
        <Box
          component={InfiniteScroll}
          pageStart={0}
          loadMore={onLoadMore}
          hasMore={hasNextPage}
          loader={<Loader key="loader" sx={styles.loadMoreLoader} />}
          sx={styles.flexColumn}
        >
          {map(data, (advertisement, index) => (
            <Advertisement
              key={index}
              {...advertisement}
              belongsToMe={advertisement.userId === userId}
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
  onLoadMore: PropTypes.func,
  hasNextPage: PropTypes.bool,
  animalsOptions: optionsShape,
  activitiesOptions: optionsShape,
};

ListView.defaultProps = {
  onFiltersSubmit: noop,
  onFiltersClear: noop,
  onMarkerClick: noop,
  onLoadMore: noop,
  data: [],
  markers: [],
  animalsOptions: [],
  activitiesOptions: [],
  hasNextPage: false,
};

export default ListView;
