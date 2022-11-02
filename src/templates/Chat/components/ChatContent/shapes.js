import { values } from 'lodash';
import PropTypes from 'prop-types';
import { ITEM_TYPE, OFFER_STATUS } from 'consts/enums';
import priceTypeShape from 'shapes/priceTypeShape';
import stringOrNumberShape from 'shapes/stringOrNumberShape';

const messagesShape = PropTypes.arrayOf(
  PropTypes.exact({
    id: stringOrNumberShape,
    content: PropTypes.string,
    isMyMessage: PropTypes.bool,
    offer: PropTypes.shape({
      status: PropTypes.oneOf(values(OFFER_STATUS)),
      offerType: PropTypes.oneOf(values(ITEM_TYPE)),
      offerId: stringOrNumberShape,
      price: PropTypes.number,
      priceType: priceTypeShape,
      startTime: PropTypes.string,
      endTime: PropTypes.string,
    }),
  })
);

export { messagesShape };
