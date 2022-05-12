import { values } from 'lodash';
import PropTypes from 'prop-types';
import { ITEM_TYPE } from 'consts/enums';

const itemTypeShape = PropTypes.oneOf(values(ITEM_TYPE));

export { itemTypeShape };
