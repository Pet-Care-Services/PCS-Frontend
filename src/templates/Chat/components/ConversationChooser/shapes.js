import PropTypes from 'prop-types';
import stringOrNumberShape from 'shapes/stringOrNumberShape';

const conversationOptionsShape = PropTypes.arrayOf(
  PropTypes.exact({
    id: stringOrNumberShape,
    image: PropTypes.string,
    name: PropTypes.string,
    userId: stringOrNumberShape,
  })
);

export { conversationOptionsShape };
