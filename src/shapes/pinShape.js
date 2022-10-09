import PropTypes from 'prop-types';
import stringOrNumberShape from './stringOrNumberShape';

export default PropTypes.shape({
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  radius: stringOrNumberShape,
});
