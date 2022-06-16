import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import styles from './styles';

const Message = ({ isMyMessage, children }) => {
  return (
    <Box sx={{ ...styles.root, ...(isMyMessage && styles.myMessage) }}>
      <Typography variant="h4" sx={styles.text}>
        {children}
      </Typography>
    </Box>
  );
};

Message.propTypes = {
  children: PropTypes.node.isRequired,
  isMyMessage: PropTypes.bool,
};

Message.defaultProps = {
  isMyMessage: false,
};

export default Message;
