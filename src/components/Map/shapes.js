import PropTypes from 'prop-types';

const markerShape = PropTypes.shape({
  position: PropTypes.exact({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  radius: PropTypes.number,
});

const markersShape = PropTypes.arrayOf(markerShape);

export { markersShape };
