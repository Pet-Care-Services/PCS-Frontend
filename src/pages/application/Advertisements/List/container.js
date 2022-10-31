import React, { useEffect } from 'react';
import { get } from 'lodash';
import { useTranslation } from 'react-i18next';
import { useMutation, useQuery } from 'react-query';
import Loader from 'components/Loader';
import { ITEM_TYPE } from 'consts/enums';
import {
  ACTIVITIES_KEY,
  ANIMALS_KEY,
  getActivities,
  getAnimals,
} from 'consts/queries';
import useChat from 'hooks/useChat';
import useURLParams from 'hooks/useURLParams';
import mapDictionaryToOptions from 'utils/mapDictionaryToOptions';
import {
  ADVERTISEMENTS_KEY,
  getAdvertisements,
  postConversation,
} from './queries';
import { itemTypeShape } from './shapes';
import { formatData, formatMarkers } from './utils';
import ListView from './view';

const ListContainer = ({ itemType }) => {
  const { t } = useTranslation();
  const { params, updateParams, clearParams } = useURLParams();
  const { openChat } = useChat();
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

  const { mutate: createConversation } = useMutation(postConversation, {
    onSuccess: () => {
      openChat();
    },
  });

  useEffect(() => {
    refetch();
  }, [itemType, params]);

  const onContactClick = (userId) => {
    createConversation({
      userId,
    });
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
      data={formatData(items)}
      markers={formatMarkers(items)}
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
