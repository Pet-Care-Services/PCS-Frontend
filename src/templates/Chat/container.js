import React, { useMemo, useState } from 'react';
import { isNil } from 'lodash';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ITEM_TYPE, OFFER_STATUS } from 'consts/enums';
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

const ChatContainer = () => {
  const navigate = useNavigate();
  const { closeChat } = useChat();
  const [activeConversationId, setActiveConversationId] = useState(null);

  const { data: conversationsData, isLoading: isLoadingConversations } =
    useQuery(CONVERSATIONS_KEY, getConversations, {
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        setActiveConversationId(data.data[0]);
      },
    });

  const {
    data: messagesData,
    isLoading: isLoadingMessages,
    refetch: refetchMessages,
  } = useQuery(
    [MESSAGES_KEY, activeConversationId],
    () => getMessages(activeConversationId),
    {
      refetchOnWindowFocus: false,
      refetchInterval: 5000, // TODO usunąć przy podejściu socketowym
      enabled: !isNil(activeConversationId),
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

  const onConversationClick = (id) => {
    setActiveConversationId(id);
  };

  const onSendMessage = ({ message }, { resetForm }) => {
    sendMessage({ conversationId: activeConversationId, text: message });
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
      activeConversationId={activeConversationId}
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

export default ChatContainer;
