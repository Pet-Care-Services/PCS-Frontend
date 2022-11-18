import PropTypes from 'prop-types';

const reviewsShape = PropTypes.arrayOf(
  PropTypes.shape({
    content: PropTypes.string,
    stars: PropTypes.number,
    author: PropTypes.string,
  })
);

export { reviewsShape };
