import { values } from 'lodash';
import PropTypes from 'prop-types';
import { ITEM_TYPE } from 'consts/enums';

const itemTypeShape = PropTypes.oneOf(values(ITEM_TYPE));

const filtersInitialValuesShape = PropTypes.exact({
  animal: PropTypes.string,
  location: PropTypes.string,
  activity: PropTypes.string,
  priceMin: PropTypes.string,
  priceMax: PropTypes.string,
});

export { itemTypeShape, filtersInitialValuesShape };
