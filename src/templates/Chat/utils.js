import { map } from 'lodash';

const prepareConversationOptions = (data) =>
  map(data, (id) => ({
    id,
    image: require('assets/mockPhoto.jpg'),
  }));

const prepareMessages = (data) =>
  map(data, (message) => ({
    id: message.messageId,
    content: message.text,
    isMyMessage: message.isMyMessage,
    offer: message.offer,
  }));

export { prepareConversationOptions, prepareMessages };
