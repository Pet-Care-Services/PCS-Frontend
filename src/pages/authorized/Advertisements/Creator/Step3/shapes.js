import PropTypes from 'prop-types';

const availabilitiesShape = PropTypes.arrayOf(
  PropTypes.shape({
    from: PropTypes.string,
    to: PropTypes.string,
    cyclic: PropTypes.bool,
    period: PropTypes.string,
  })
);

const initialValuesShape = PropTypes.shape({
  activity: PropTypes.string,
  price: PropTypes.exact({
    amount: PropTypes.string,
    type: PropTypes.string,
  }),
  location: PropTypes.string,
  availabilities: availabilitiesShape,
  capacity: PropTypes.string,
});

export { availabilitiesShape, initialValuesShape };
