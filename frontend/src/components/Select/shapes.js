import PropTypes from 'prop-types';

const optionsShape = PropTypes.arrayOf(
  PropTypes.exact({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  })
);

export { optionsShape };
