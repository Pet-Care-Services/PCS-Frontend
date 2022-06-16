import React, { useEffect, useRef } from 'react';
import { map } from 'lodash';
import { Box } from '@mui/system';
import Message from 'components/Message';
import { messagesShape } from './shapes';
import styles from './styles';

const ChatContent = ({ messages }) => {
  const endRef = useRef();

  useEffect(() => {
    endRef?.current?.scrollIntoView();
  }, []);

  return (
    <Box sx={styles.root}>
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
};

ChatContent.defaultProps = {
  messages: [],
};

export default ChatContent;
