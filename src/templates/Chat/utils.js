import { map } from 'lodash';

const prepareConversationOptions = (data) =>
  map(data, (conversation) => ({
    id: conversation.conversationId,
    image: conversation.avatar,
    name: `${conversation.firstName} ${conversation.lastName}`,
    userId: conversation.userId,
  }));

const prepareMessages = (data) =>
  map(data, (message) => ({
    id: message.messageId,
    content: message.text,
    isMyMessage: message.isMyMessage,
    offer: message.offer,
  }));

export { prepareConversationOptions, prepareMessages };
