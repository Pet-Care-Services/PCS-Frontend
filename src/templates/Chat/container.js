import React, { useState } from 'react';
import { conversationOptionsMock, messagesMock } from './mock';
import ChatView from './view';

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
