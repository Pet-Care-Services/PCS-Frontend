import PropTypes from 'prop-types';
import priceTypeShape from './priceTypeShape';

export default PropTypes.shape({
  from: PropTypes.number.isRequired,
  to: PropTypes.number,
  type: priceTypeShape,
});
