import React from 'react';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import stringOrNumberShape from 'shapes/stringOrNumberShape';
import ChatContent from './components/ChatContent';
import { messagesShape } from './components/ChatContent/shapes';
import ConversationChooser from './components/ConversationChooser';
import { conversationOptionsShape } from './components/ConversationChooser/shapes';
import MessageSender from './components/MessageSender';
import styles from './styles';

const ChatView = ({
  conversationOptions,
  activeConversationId,
  messages,
  onConversationClick,
  onSendMessage,
  isLoadingConversations,
  isLoadingMessages,
}) => {
  return (
    <Box sx={styles.root}>
      <ConversationChooser
        loading={isLoadingConversations}
        options={conversationOptions}
        activeConversationId={activeConversationId}
        onConversationClick={onConversationClick}
      />
      <Box sx={styles.rightContent}>
        <ChatContent messages={messages} loading={isLoadingMessages} />
        <MessageSender onSubmit={onSendMessage} />
      </Box>
    </Box>
  );
};

ChatView.propTypes = {
  conversationOptions: conversationOptionsShape,
  activeConversationId: stringOrNumberShape,
  messages: messagesShape,
  onConversationClick: PropTypes.func,
  onSendMessage: PropTypes.func,
  isLoadingConversations: PropTypes.bool,
  isLoadingMessages: PropTypes.bool,
};

ChatView.defaultProps = {
  conversationOptions: [],
  activeConversationId: null,
  messages: [],
  onConversationClick: noop,
  onSendMessage: noop,
  isLoadingConversations: true,
  isLoadingMessages: true,
};

export default ChatView;
