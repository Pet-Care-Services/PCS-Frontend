import React, { useEffect } from 'react';
import { get } from 'lodash';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import Loader from 'components/Loader';
import { ITEM_TYPE } from 'consts/enums';
import {
  ACTIVITIES_KEY,
  ANIMALS_KEY,
  getActivities,
  getAnimals,
} from 'consts/queries';
import useDialog from 'hooks/useDialog';
import useURLParams from 'hooks/useURLParams';
import useUserData from 'hooks/useUserData';
import Login from 'templates/Login';
import RequestOfferCreator from 'templates/OfferCreator/RequestOfferCreator';
import ServiceOfferCreator from 'templates/OfferCreator/ServiceOfferCreator';
import mapDictionaryToOptions from 'utils/mapDictionaryToOptions';
import { ADVERTISEMENTS_KEY, getAdvertisements } from './queries';
import { itemTypeShape } from './shapes';
import { formatData, formatMarkers } from './utils';
import ListView from './view';

const ListContainer = ({ itemType }) => {
  const { t } = useTranslation();
  const { params, updateParams, clearParams } = useURLParams();
  const { isLoggedIn } = useUserData();

  const { openDialog } = useDialog();
  const {
    data: advertisementsData,
    isLoading: isLoadingAdvertisements,
    refetch,
  } = useQuery(ADVERTISEMENTS_KEY, () => getAdvertisements(itemType, params), {
    refetchOnWindowFocus: false,
  });

  const { data: animalsData, isLoading: isLoadingAnimals } = useQuery(
    ANIMALS_KEY,
    getAnimals,
    { refetchOnWindowFocus: false }
  );

  const { data: activitiesData, isLoading: isLoadingActivities } = useQuery(
    ACTIVITIES_KEY,
    getActivities,
    { refetchOnWindowFocus: false }
  );

  useEffect(() => {
    refetch();
  }, [itemType, params]);

  const onContactClick = (advertisement) => {
    if (isLoggedIn) {
      const content =
        itemType === ITEM_TYPE.SERVICE ? (
          <ServiceOfferCreator advertisement={advertisement} />
        ) : (
          <RequestOfferCreator advertisement={advertisement} />
        );
      openDialog({
        content,
        width: 1000,
      });
    } else {
      openDialog({ content: <Login /> });
    }
  };

  const onMarkerClick = ({ servicesIndices, requestId }) => {
    if (itemType === ITEM_TYPE.SERVICE) {
      updateParams({ expanded: `${servicesIndices}` });
    } else {
      updateParams({ expanded: requestId });
    }
  };

  const filtersInitialValues = {
    animalId: params.animalId || '',
    location: params.location || '',
    activityId: params.activityId || '',
    minPrice: params.minPrice || '',
    maxPrice: params.maxPrice || '',
  };

  const items = get(advertisementsData, 'data');

  if (isLoadingAnimals || isLoadingActivities) {
    return <Loader />;
  }

  return (
    <ListView
      filtersInitialValues={filtersInitialValues}
      onFiltersSubmit={updateParams}
      onFiltersClear={clearParams}
      onContactClick={onContactClick}
      onMarkerClick={onMarkerClick}
      markers={formatMarkers(items)}
      data={formatData(items, onContactClick)}
      animalsOptions={mapDictionaryToOptions(animalsData.data, 'animal', t)}
      activitiesOptions={mapDictionaryToOptions(
        activitiesData.data,
        'activity',
        t
      )}
      itemType={itemType}
      isLoading={isLoadingAdvertisements}
    />
  );
};

ListContainer.propTypes = {
  itemType: itemTypeShape.isRequired,
};

export default ListContainer;
