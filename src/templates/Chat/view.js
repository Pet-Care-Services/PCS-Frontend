import React from 'react';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import stringOrNumberShape from 'shapes/stringOrNumberShape';
import ChatContent from './components/ChatContent';
import { messagesShape } from './components/ChatContent/shapes';
import ConversationChooser from './components/ConversationChooser';
import { conversationOptionsShape } from './components/ConversationChooser/shapes';
import styles from './styles';

const ChatView = ({
  conversationOptions,
  activeConversationId,
  activeConversatorName,
  activeConversatorId,
  messages,
  onConversationClick,
  onSendMessage,
  onAcceptOffer,
  onRejectOffer,
  onOfferLinkClick,
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
        <ChatContent
          onAcceptOffer={onAcceptOffer}
          onRejectOffer={onRejectOffer}
          onOfferLinkClick={onOfferLinkClick}
          messages={messages}
          loading={isLoadingMessages}
          onSendMessage={onSendMessage}
          name={activeConversatorName}
          userId={activeConversatorId}
        />
      </Box>
    </Box>
  );
};

ChatView.propTypes = {
  conversationOptions: conversationOptionsShape,
  activeConversationId: stringOrNumberShape,
  activeConversatorId: stringOrNumberShape,
  messages: messagesShape,
  onConversationClick: PropTypes.func,
  onSendMessage: PropTypes.func,
  onAcceptOffer: PropTypes.func,
  onRejectOffer: PropTypes.func,
  onOfferLinkClick: PropTypes.func,
  isLoadingConversations: PropTypes.bool,
  isLoadingMessages: PropTypes.bool,
  activeConversatorName: PropTypes.string,
};

ChatView.defaultProps = {
  conversationOptions: [],
  activeConversationId: null,
  activeConversatorId: null,
  messages: [],
  onConversationClick: noop,
  onSendMessage: noop,
  onAcceptOffer: noop,
  onRejectOffer: noop,
  onOfferLinkClick: noop,
  isLoadingConversations: true,
  isLoadingMessages: true,
  activeConversatorName: '',
};

export default ChatView;
