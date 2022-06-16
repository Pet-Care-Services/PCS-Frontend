import React from 'react';
import { map } from 'lodash';
import { Box } from '@mui/system';
import { messagesShape } from './shapes';
import styles from './styles';

const ChatContent = ({ messages }) => {
  return (
    <Box sx={styles.root}>
      {map(messages, (message) => (
        <Box sx={{ ...(message.isMyMessage && styles.myMessage) }}>
          {message.content}
        </Box>
      ))}
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
