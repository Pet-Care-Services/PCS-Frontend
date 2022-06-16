import PropTypes from 'prop-types';
import stringOrNumberShape from 'shapes/stringOrNumberShape';

const messagesShape = PropTypes.arrayOf(
  PropTypes.exact({
    id: stringOrNumberShape,
    content: PropTypes.string,
    isMyMessage: PropTypes.bool,
  })
);

export { messagesShape };
