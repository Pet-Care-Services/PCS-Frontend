import PropTypes from 'prop-types';
import pinShape from 'shapes/pinShape';
import priceShape from 'shapes/priceShape';

const advertisementShape = PropTypes.shape({
  requestId: PropTypes.number,
  servicesIndices: PropTypes.arrayOf(PropTypes.number),
  activities: PropTypes.arrayOf(PropTypes.string),
  animals: PropTypes.arrayOf(PropTypes.string),
  averageRating: PropTypes.number,
  price: priceShape,
  location: PropTypes.string,
  pin: pinShape,
  image: PropTypes.string,
  onContactClick: PropTypes.func,
});

const advertisementsShape = PropTypes.arrayOf(advertisementShape);

export default advertisementsShape;
