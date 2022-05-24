import React from 'react';
import { get, isEmpty } from 'lodash';
import { useQuery } from 'react-query';
import useURLParams from 'hooks/useURLParams';
import { ADVERTISEMENTS_KEY, getAdvertisements } from './queries';
import { itemTypeShape } from './shapes';
import { formatData } from './utils';
import ListView from './view';

const ListContainer = ({ itemType }) => {
  const { params, updateParams, clearParams } = useURLParams();
  const { data, isLoading } = useQuery(
    ADVERTISEMENTS_KEY,
    () => getAdvertisements(itemType),
    { refetchOnWindowFocus: false }
  );

  const filtersInitialValues = {
    animal: params.animal || '',
    location: params.location || '',
    activity: params.activity || '',
    priceMin: params.priceMin || '',
    priceMax: params.priceMax || '',
  };

  const items = get(data, 'data');

  return (
    <ListView
      filtersInitialValues={filtersInitialValues}
      onFiltersSubmit={updateParams}
      onFiltersClear={clearParams}
      data={formatData(items)}
      noResults={isEmpty(items)}
      isLoading={isLoading}
    />
  );
};

ListContainer.propTypes = {
  itemType: itemTypeShape.isRequired,
};

export default ListContainer;
