import PropTypes from 'prop-types';
import stringOrNumberShape from 'shapes/stringOrNumberShape';

const optionsShape = PropTypes.arrayOf(
  PropTypes.shape({
    value: stringOrNumberShape.isRequired,
    label: PropTypes.string.isRequired,
    set: PropTypes.arrayOf(
      PropTypes.exact({
        field: PropTypes.string,
        value: stringOrNumberShape,
      })
    ),
  })
);

export default optionsShape;
