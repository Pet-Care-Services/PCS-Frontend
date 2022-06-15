import React from 'react';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import stringOrNumberShape from 'shapes/stringOrNumberShape';
import ChatContent from './components/ChatContent';
import ConversationChooser from './components/ConversationChooser';
import { conversationOptionsShape } from './components/ConversationChooser/shapes';
import MessageSender from './components/MessageSender';

const ChatView = ({
  conversationOptions,
  activeConversationId,
  onConversationClick,
  onSendMessage,
}) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
      }}
    >
      <ConversationChooser
        options={conversationOptions}
        activeConversationId={activeConversationId}
        onConversationClick={onConversationClick}
      />
      <Box
        sx={{
          flex: 1,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <ChatContent />
        <MessageSender onSubmit={onSendMessage} />
      </Box>
    </Box>
  );
};

ChatView.propTypes = {
  conversationOptions: conversationOptionsShape,
  activeConversationId: stringOrNumberShape,
  onConversationClick: PropTypes.func,
  onSendMessage: PropTypes.func,
};

ChatView.defaultProps = {
  conversationOptions: [],
  activeConversationId: null,
  onConversationClick: noop,
  onSendMessage: noop,
};

export default ChatView;
