import PropTypes from 'prop-types';

const propTypesObject = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  faded: PropTypes.bool,
};

const defaultPropsObject = {
  onClick: null,
  faded: false,
};

export { propTypesObject, defaultPropsObject };
