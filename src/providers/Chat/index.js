import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { Drawer } from '@mui/material';
import useBreakpoints from 'hooks/useBreakpoints';
import Chat from 'templates/Chat';
import reducer, { actions } from './reducer';

const initialState = {
  open: false,
};

const ChatContext = React.createContext({});

const ChatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  const { isMediumScreen } = useBreakpoints();

  const handleClose = () => {
    dispatch({
      type: actions.CLOSE_CHAT,
    });
  };

  return (
    <ChatContext.Provider value={value}>
      {children}
      <Drawer
        anchor="right"
        open={state.open}
        PaperProps={{
          sx: {
            width: isMediumScreen ? '100%' : '70%',
            backgroundColor: 'transparent',
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            overflowY: 'unset',
          },
        }}
        onClose={handleClose}
        transitionDuration={700}
      >
        <Chat />
      </Drawer>
    </ChatContext.Provider>
  );
};

ChatProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ChatProvider;

export { ChatContext };
