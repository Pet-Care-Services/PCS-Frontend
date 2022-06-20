import React, { useEffect } from 'react';
import { get } from 'lodash';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import Loader from 'components/Loader';
import {
  ACTIVITIES_KEY,
  ANIMALS_KEY,
  getActivities,
  getAnimals,
} from 'consts/queries';
import useURLParams from 'hooks/useURLParams';
import mapDictionaryToOptions from 'utils/mapDictionaryToOptions';
import { ADVERTISEMENTS_KEY, getAdvertisements } from './queries';
import { itemTypeShape } from './shapes';
import { formatData } from './utils';
import ListView from './view';

const ListContainer = ({ itemType }) => {
  const { t } = useTranslation();
  const { params, updateParams, clearParams } = useURLParams();
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

  const filtersInitialValues = {
    animalId: params.animalId || '',
    location: params.location || '',
    activityId: params.activityId || '',
    minPrice: params.minPrice || '',
    maxPrice: params.maxPrice || '',
  };

  const items = get(advertisementsData, 'data');
  console.log(items, formatData(items));

  if (isLoadingAnimals || isLoadingActivities) {
    return <Loader />;
  }

  return (
    <ListView
      filtersInitialValues={filtersInitialValues}
      onFiltersSubmit={updateParams}
      onFiltersClear={clearParams}
      data={formatData(items)}
      animalsOptions={mapDictionaryToOptions(animalsData.data, 'animal', t)}
      activitiesOptions={mapDictionaryToOptions(
        activitiesData.data,
        'activity',
        t
      )}
      isLoading={isLoadingAdvertisements}
    />
  );
};

ListContainer.propTypes = {
  itemType: itemTypeShape.isRequired,
};

export default ListContainer;
