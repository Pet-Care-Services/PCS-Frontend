import PropTypes from 'prop-types';
import priceTypeShape from './priceTypeShape';

export default PropTypes.shape({
  from: PropTypes.number,
  to: PropTypes.number,
  type: priceTypeShape,
  amount: PropTypes.number,
});
