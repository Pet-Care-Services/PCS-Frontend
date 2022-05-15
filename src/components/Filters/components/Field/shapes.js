import { keys } from 'lodash';
import PropTypes from 'prop-types';
import { optionsShape } from 'components/Select/shapes';
import { FIELD_TYPES } from './consts';

const fieldPropsShape = PropTypes.shape({
  options: optionsShape,
});

const fieldObject = {
  name: PropTypes.string,
  label: PropTypes.string,
  fieldType: PropTypes.oneOf(keys(FIELD_TYPES)),
  fieldProps: fieldPropsShape,
};

const fieldShape = PropTypes.shape(fieldObject);

export { fieldObject, fieldShape };
