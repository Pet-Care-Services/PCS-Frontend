import React from 'react';
import useURLParams from 'hooks/useURLParams';
import { itemTypeShape } from './shapes';
import ListView from './view';

const ListContainer = ({ itemType }) => {
  const { params, updateParams, clearParams } = useURLParams();

  const filtersInitialValues = {
    animal: params.animal || '',
    location: params.location || '',
    activity: params.activity || '',
    priceMin: params.priceMin || '',
    priceMax: params.priceMax || '',
  };

  return (
    <ListView
      itemType={itemType}
      filtersInitialValues={filtersInitialValues}
      onFiltersSubmit={updateParams}
      onFiltersClear={clearParams}
    />
  );
};

ListContainer.propTypes = {
  itemType: itemTypeShape.isRequired,
};

export default ListContainer;
