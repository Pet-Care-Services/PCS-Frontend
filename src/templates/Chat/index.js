import React from 'react';
import { Box } from '@mui/system';
import ChatContent from './components/ChatContent';
import ConversationChooser from './components/ConversationChooser';
import MessageSender from './components/MessageSender';

const Chat = () => {
  return (
    <Box sx={{ width: '100%', height: '100%', display: 'flex' }}>
      <ConversationChooser />
      <Box
        sx={{
          flex: 1,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ padding: 10 }}>
          <ChatContent />
        </Box>
        <MessageSender />
      </Box>
    </Box>
  );
};

export default Chat;
