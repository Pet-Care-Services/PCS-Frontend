import PropTypes from 'prop-types';

export default PropTypes.arrayOf(
  PropTypes.shape({
    from: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    to: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    cyclic: PropTypes.bool,
    period: PropTypes.string,
  })
);
