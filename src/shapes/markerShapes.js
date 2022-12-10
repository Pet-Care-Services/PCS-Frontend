import PropTypes from 'prop-types';
import priceShape from 'shapes/priceShape';

const markerDataShape = PropTypes.shape({
  servicesIndices: PropTypes.arrayOf(PropTypes.number),
  requestId: PropTypes.number,
  activities: PropTypes.arrayOf(PropTypes.string),
  animals: PropTypes.arrayOf(PropTypes.string),
  averageRating: PropTypes.number,
  price: priceShape,
});

const markerShape = PropTypes.shape({
  position: PropTypes.exact({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  radius: PropTypes.number,
  data: markerDataShape,
});

const markersShape = PropTypes.arrayOf(markerShape);

export { markersShape, markerDataShape };
