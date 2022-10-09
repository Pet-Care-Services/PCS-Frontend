import { values } from 'lodash';
import PropTypes from 'prop-types';
import { ITEM_TYPE } from 'consts/enums';
import pinShape from 'shapes/pinShape';
import priceTypeShape from 'shapes/priceTypeShape';

const itemTypeShape = PropTypes.oneOf(values(ITEM_TYPE));

const filtersInitialValuesShape = PropTypes.exact({
  animalId: PropTypes.string,
  location: PropTypes.string,
  activityId: PropTypes.string,
  minPrice: PropTypes.string,
  maxPrice: PropTypes.string,
});

const advertisementShape = PropTypes.shape({
  id: PropTypes.number,
  activities: PropTypes.arrayOf(PropTypes.string),
  animals: PropTypes.arrayOf(PropTypes.string),
  starsValue: PropTypes.number,
  price: PropTypes.shape({
    from: PropTypes.number,
    to: PropTypes.number,
    type: priceTypeShape,
  }),
  location: PropTypes.string,
  pin: pinShape,
  image: PropTypes.string,
});

const dataShape = PropTypes.arrayOf(advertisementShape);

export { itemTypeShape, filtersInitialValuesShape, dataShape };
