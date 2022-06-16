import React, { useState } from 'react';
import ChatView from './view';

const conversationOptionsMock = [
  {
    id: 0,
    image: require('assets/mockPhoto.jpg'),
  },
  {
    id: 1,
    image: require('assets/mockPhoto.jpg'),
  },
  {
    id: 2,
    image: require('assets/mockPhoto.jpg'),
  },
];

const ChatContainer = () => {
  const [activeConversationId, setActiveConversationId] = useState(0);

  const onConversationClick = (id) => {
    setActiveConversationId(id);
  };

  const onSendMessage = (values, { resetForm }) => {
    console.log('sending: ' + values.message);
    resetForm();
  };

  return (
    <ChatView
      conversationOptions={conversationOptionsMock}
      activeConversationId={activeConversationId}
      onConversationClick={onConversationClick}
      onSendMessage={onSendMessage}
    />
  );
};

export default ChatContainer;
