import PropTypes from 'prop-types';
import availabilitiesShape from 'shapes/availabilitiesShape';
import locationShape from 'shapes/locationShape';
import pinShape from 'shapes/pinShape';

const initialValuesShape = PropTypes.shape({
  activity: PropTypes.string,
  price: PropTypes.exact({
    amount: PropTypes.string,
    type: PropTypes.string,
  }),
  location: locationShape,
  pin: pinShape,
  availabilities: availabilitiesShape,
  capacity: PropTypes.string,
});

export { initialValuesShape };
