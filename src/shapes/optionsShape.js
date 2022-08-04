import PropTypes from 'prop-types';
import stringOrNumberShape from 'shapes/stringOrNumberShape';

const optionsShape = PropTypes.arrayOf(
  PropTypes.exact({
    value: stringOrNumberShape,
    label: PropTypes.string,
  })
);

export default optionsShape;
