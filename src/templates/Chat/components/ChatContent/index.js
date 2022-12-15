import React, { useEffect, useRef } from 'react';
import { get, map, noop } from 'lodash';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/system';
import ActionText from 'components/ActionText';
import ChatOffer from 'components/ChatOffer';
import Icon from 'components/Icon';
import Loader from 'components/Loader';
import Message from 'components/Message';
import { ITEM_TYPE } from 'consts/enums';
import useChat from 'hooks/useChat';
import stringOrNumberShape from 'shapes/stringOrNumberShape';
import MessageSender from '../MessageSender';
import { messagesShape } from './shapes';
import styles from './styles';

const ChatContent = ({
  onAcceptOffer,
  onRejectOffer,
  onOfferLinkClick,
  onSendMessage,
  messages,
  loading,
  name,
  userId,
}) => {
  const endRef = useRef();
  const { closeChat } = useChat();
  const navigate = useNavigate();

  useEffect(() => {
    endRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Box sx={[styles.column, styles.root]}>
      <Box sx={styles.header}>
        <ActionText
          variant="h2"
          onClick={() => navigate(`application/account/${userId}`)}
        >
          {name || ''}
        </ActionText>
        <Icon Component={CloseIcon} onClick={closeChat} />
      </Box>
      <Box sx={[styles.column, styles.content]}>
        {loading && <Loader />}
        {map(messages, (message) => {
          const isServiceOffer =
            get(message, 'offer.offerType') === ITEM_TYPE.SERVICE;

          let availabilities;

          if (isServiceOffer) {
            availabilities = [
              {
                from: new Date(message.offer.startTime),
                to: new Date(message.offer.endTime),
              },
            ];
          }

          return (
            <Box
              key={message.id}
              sx={[
                styles.messageWrapper,
                message.isMyMessage && styles.myMessage,
              ]}
            >
              {message.offer ? (
                <ChatOffer
                  showButtons={!message.isMyMessage}
                  onAccept={() => onAcceptOffer(message.id)}
                  onReject={() => onRejectOffer(message.id)}
                  onLinkClick={() =>
                    onOfferLinkClick(
                      message.offer.userToId,
                      message.offer.offerType,
                      message.offer.offerId
                    )
                  }
                  image={message.offer.offerPhoto}
                  status={message.offer.status}
                  animal={message.offer.animal}
                  activities={message.offer.activities}
                  price={{ from: message.offer.price }}
                  availabilities={isServiceOffer ? availabilities : null}
                  message={message.content}
                />
              ) : (
                <Message isMyMessage={message.isMyMessage}>
                  {message.content}
                </Message>
              )}
            </Box>
          );
        })}
        <Box ref={endRef} />
      </Box>
      <MessageSender onSubmit={onSendMessage} />
    </Box>
  );
};

ChatContent.propTypes = {
  messages: messagesShape,
  loading: PropTypes.bool,
  onAcceptOffer: PropTypes.func,
  onRejectOffer: PropTypes.func,
  onOfferLinkClick: PropTypes.func,
  onSendMessage: PropTypes.func,
  name: PropTypes.string,
  userId: stringOrNumberShape,
};

ChatContent.defaultProps = {
  messages: [],
  loading: true,
  onAcceptOffer: noop,
  onRejectOffer: noop,
  onOfferLinkClick: noop,
  onSendMessage: noop,
  name: '',
  userId: null,
};

export default ChatContent;
