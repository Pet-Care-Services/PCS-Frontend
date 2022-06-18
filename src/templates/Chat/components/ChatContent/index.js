import React, { useEffect, useRef } from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
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
          <Message isMyMessage={message.isMyMessage}>{message.content}</Message>
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
