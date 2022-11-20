import PropTypes from 'prop-types';

const baseSxShape = PropTypes.oneOfType([PropTypes.object, PropTypes.func]);

export default PropTypes.oneOfType([
  baseSxShape,
  PropTypes.arrayOf(baseSxShape),
]);
