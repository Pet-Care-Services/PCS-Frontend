import React from 'react';
import { Box } from '@mui/system';

const ChatContent = () => {
  return (
    <Box
      sx={{
        width: '100%',
        flex: 1,
        backgroundColor: (theme) => theme.palette.white,
        padding: 15,
        boxSizing: 'border-box',
      }}
    >
      ChatContent
    </Box>
  );
};

export default ChatContent;
