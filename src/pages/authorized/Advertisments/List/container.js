import React from 'react';
import { itemTypeShape } from './shapes';
import ListView from './view';

const ListContainer = ({ itemType }) => {
  // some API calls here
  return <ListView itemType={itemType} />;
};

ListContainer.propTypes = {
  itemType: itemTypeShape.isRequired,
};

export default ListContainer;
