import PropTypes from 'prop-types';
import { fieldShape } from './components/Field/shapes';

const rowShape = PropTypes.oneOfType([
  fieldShape,
  PropTypes.arrayOf(fieldShape),
]);

const rowsShape = PropTypes.arrayOf(rowShape);

export { rowsShape };
