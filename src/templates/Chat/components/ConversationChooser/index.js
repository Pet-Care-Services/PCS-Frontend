import React from 'react';
import { map, noop } from 'lodash';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import Loader from 'components/Loader';
import stringOrNumberShape from 'shapes/stringOrNumberShape';
import { conversationOptionsShape } from './shapes';
import styles from './styles';

const ConversationChooser = ({
  loading,
  options,
  activeConversationId,
  onConversationClick,
}) => {
  return (
    <Box sx={styles.root}>
      {loading && <Loader />}
      {map(options, ({ id, image }) => (
        <Box
          key={id}
          sx={{
            ...styles.imageWrapper,
            ...(activeConversationId === id && styles.active),
          }}
        >
          <Box
            component="img"
            src={image}
            onClick={() => onConversationClick(id)}
            sx={styles.image}
          />
        </Box>
      ))}
    </Box>
  );
};

ConversationChooser.propTypes = {
  options: conversationOptionsShape.isRequired,
  activeConversationId: stringOrNumberShape,
  onConversationClick: PropTypes.func,
  loading: PropTypes.bool,
};

ConversationChooser.defaultProps = {
  activeConversationId: null,
  onConversationClick: noop,
  loading: true,
};

export default ConversationChooser;
