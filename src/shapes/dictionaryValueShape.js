import PropTypes from 'prop-types';
import stringOrNumberShape from './stringOrNumberShape';

export default PropTypes.shape({
  id: stringOrNumberShape,
  name: PropTypes.string,
});
