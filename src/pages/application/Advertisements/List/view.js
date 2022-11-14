import React, { useState } from 'react';
import { isEmpty, map, noop, toString } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import InfiniteScroll from 'react-infinite-scroller';
import { Box, Collapse } from '@mui/material';
import Advertisement from 'components/Advertisement';
import EmptyState from 'components/EmptyState';
import Filters from 'components/Filters';
import Loader from 'components/Loader';
import Map from 'components/Map';
import TileWrapper from 'components/TileWrapper';
import { ENV, ITEM_TYPE } from 'consts/enums';
import useExpandedAdvertisement from 'hooks/useExpandedAdvertisement';
import useUserData from 'hooks/useUserData';
import advertisementsShape from 'shapes/advertisementsShape';
import { markersShape } from 'shapes/markerShapes';
import optionsShape from 'shapes/optionsShape';
import { getFiltersFields, getOptionsFields } from './consts';
import { filtersInitialValuesShape, itemTypeShape } from './shapes';
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
  onLoadMore,
  hasNextPage,
}) => {
  const { t } = useTranslation();
  const [isMapVisible, setIsMapVisible] = useState(false);
  const { userId } = useUserData();
  const { expandedAdvertisementIndex, onAdvertisementClick } =
    useExpandedAdvertisement(data, itemType, isLoading);

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
            <EmptyState />
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
              belongsToMe={toString(advertisement.userId) === toString(userId)}
              isService={isService}
              isExpanded={expandedAdvertisementIndex === index}
              onBoxClick={() => onAdvertisementClick(index)}
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
  data: advertisementsShape,
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
