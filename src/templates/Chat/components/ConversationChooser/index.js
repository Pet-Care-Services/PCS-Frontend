import React from 'react';
import { map, noop } from 'lodash';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import stringOrNumberShape from 'shapes/stringOrNumberShape';
import styles from './styles';

const ConversationChooser = ({
  options,
  activeConversationId,
  onConversationClick,
}) => {
  return (
    <Box sx={styles.root}>
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
  options: PropTypes.arrayOf(
    PropTypes.exact({
      id: stringOrNumberShape,
      image: PropTypes.string,
    })
  ).isRequired,
  activeConversationId: stringOrNumberShape,
  onConversationClick: PropTypes.func,
};

ConversationChooser.defaultProps = {
  activeConversationId: null,
  onConversationClick: noop,
};

export default ConversationChooser;
