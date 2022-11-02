import React, { useEffect, useRef } from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import ChatOffer from 'components/ChatOffer';
import Loader from 'components/Loader';
import Message from 'components/Message';
import { messagesShape } from './shapes';
import styles from './styles';

const ChatContent = ({ messages, loading }) => {
  const endRef = useRef();

  useEffect(() => {
    endRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Box sx={styles.root}>
      {loading && <Loader />}
      {map(messages, (message) => (
        <Box
          key={message.id}
          sx={{
            ...styles.messageWrapper,
            ...(message.isMyMessage && styles.myMessage),
          }}
        >
          {message.offer ? (
            <ChatOffer
              image={require('assets/mockPhoto.jpg')}
              status={message.offer.status}
              price={{ from: message.offer.price }}
              availabilities={[
                {
                  from: new Date(message.offer.startTime),
                  to: new Date(message.offer.endTime),
                },
              ]}
              message={message.content}
            />
          ) : (
            <Message isMyMessage={message.isMyMessage}>
              {message.content}
            </Message>
          )}
        </Box>
      ))}
      <Box ref={endRef} />
    </Box>
  );
};

ChatContent.propTypes = {
  messages: messagesShape,
  loading: PropTypes.bool,
};

ChatContent.defaultProps = {
  messages: [],
  loading: true,
};

export default ChatContent;
