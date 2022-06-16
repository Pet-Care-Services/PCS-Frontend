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

const messagesMock = [
  {
    id: 0,
    content: 'Cześć, jestem zainteresowany ofertą.',
    isMyMessage: false,
  },
  {
    id: 1,
    content: 'Ok, postaram się odpisać w najbliższym czasie :)',
    isMyMessage: true,
  },
  {
    id: 2,
    content: 'Myślę że się dogadamy.',
    isMyMessage: true,
  },
  {
    id: 3,
    content: 'Ok - czekam...',
    isMyMessage: false,
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
      messages={messagesMock}
    />
  );
};

export default ChatContainer;
