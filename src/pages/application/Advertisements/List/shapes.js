import { values } from 'lodash';
import PropTypes from 'prop-types';
import { ITEM_TYPE } from 'consts/enums';

const itemTypeShape = PropTypes.oneOf(values(ITEM_TYPE));

const filtersInitialValuesShape = PropTypes.exact({
  animalIndices: PropTypes.string,
  location: PropTypes.string,
  activityIndices: PropTypes.string,
  minPrice: PropTypes.string,
  maxPrice: PropTypes.string,
  sort: PropTypes.string,
  isDescending: PropTypes.oneOf(['true', 'false', '']),
});

export { itemTypeShape, filtersInitialValuesShape };
