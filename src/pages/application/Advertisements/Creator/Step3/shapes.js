import PropTypes from 'prop-types';

const availabilitiesShape = PropTypes.arrayOf(
  PropTypes.shape({
    from: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    to: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
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
