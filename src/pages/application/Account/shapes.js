import PropTypes from 'prop-types';
import stringOrNumberShape from 'shapes/stringOrNumberShape';

const reviewsShape = PropTypes.arrayOf(
  PropTypes.shape({
    content: PropTypes.string,
    stars: PropTypes.number,
    authorName: PropTypes.string,
    createdDate: PropTypes.string,
    authorId: stringOrNumberShape,
  })
);

export { reviewsShape };
