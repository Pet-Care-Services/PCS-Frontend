import React, { useMemo, useState } from 'react';
import { find, isNil } from 'lodash';
import PropTypes from 'prop-types';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { OFFER_STATUS } from 'consts/enums';
import useChat from 'hooks/useChat';
import {
  getConversations,
  getMessages,
  postMessage,
  CONVERSATIONS_KEY,
  MESSAGES_KEY,
  postOfferDecision,
} from './queries';
import { prepareConversationOptions, prepareMessages } from './utils';
import ChatView from './view';

const ChatContainer = ({ initialActiveConversationId }) => {
  const navigate = useNavigate();
  const { closeChat } = useChat();
  const [activeConversation, setActiveConversation] = useState({
    id: null,
    name: null,
  });

  const { data: conversationsData, isLoading: isLoadingConversations } =
    useQuery(CONVERSATIONS_KEY, getConversations, {
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        const chosenConversation =
          find(
            data.data,
            (entry) => entry.conversationId === initialActiveConversationId
          ) || data.data[0];

        const isDataPresent = !isNil(chosenConversation);

        setActiveConversation({
          id: isDataPresent ? chosenConversation.conversationId : null,
          name: isDataPresent
            ? `${chosenConversation.firstName} ${chosenConversation.lastName}`
            : null,
        });
      },
    });

  const {
    data: messagesData,
    isLoading: isLoadingMessages,
    refetch: refetchMessages,
  } = useQuery(
    [MESSAGES_KEY, activeConversation.id],
    () => getMessages(activeConversation.id),
    {
      refetchOnWindowFocus: false,
      refetchInterval: 5000, // TODO usunąć przy podejściu socketowym
      enabled: !isNil(activeConversation.id),
    }
  );

  const { mutate: sendMessage } = useMutation(postMessage, {
    onSuccess: () => {
      refetchMessages();
    },
  });

  const { mutate: makeDecision } = useMutation(postOfferDecision, {
    onSuccess: () => {
      refetchMessages();
    },
  });

  const onConversationClick = (data) => {
    setActiveConversation(data);
  };

  const onSendMessage = ({ message }, { resetForm }) => {
    sendMessage({ conversationId: activeConversation.id, text: message });
    resetForm();
  };

  const onAcceptOffer = (messageId) => {
    makeDecision({ messageId, status: OFFER_STATUS.ACCEPTED });
  };

  const onRejectOffer = (messageId) => {
    makeDecision({ messageId, status: OFFER_STATUS.REJECTED });
  };

  const onOfferLinkClick = (offerUserId, offerType, offerId) => {
    closeChat();

    navigate(
      `/application/account/${offerUserId}?expanded=${offerId}&itemType=${offerType}`
    );
  };

  const conversationOptions = prepareConversationOptions(
    conversationsData?.data
  );
  const messages = useMemo(
    () => prepareMessages(messagesData?.data),
    [messagesData?.data]
  );

  return (
    <ChatView
      conversationOptions={conversationOptions}
      activeConversationId={activeConversation.id}
      activeConversatorName={activeConversation.name}
      activeConversatorId={'TODO'}
      onConversationClick={onConversationClick}
      onSendMessage={onSendMessage}
      onAcceptOffer={onAcceptOffer}
      onRejectOffer={onRejectOffer}
      onOfferLinkClick={onOfferLinkClick}
      messages={messages}
      isLoadingConversations={isLoadingConversations}
      isLoadingMessages={isLoadingMessages}
    />
  );
};

ChatContainer.propTypes = {
  initialActiveConversationId: PropTypes.number,
};

ChatContainer.defaultProps = {
  initialActiveConversationId: null,
};

export default ChatContainer;
