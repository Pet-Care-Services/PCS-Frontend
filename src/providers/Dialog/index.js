import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import Dialog from 'components/Dialog';
import reducer, { actions } from './reducer';

const initialState = {
  open: false,
  content: null,
  closable: true,
};

const DialogContext = React.createContext({});

const DialogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  const handleClose = () => {
    if (state.closable) {
      dispatch({
        type: actions.CLOSE_DIALOG,
      });
    }
  };

  return (
    <DialogContext.Provider value={value}>
      {children}
      <Dialog onClose={handleClose} open={state.open} content={state.content} />
    </DialogContext.Provider>
  );
};

DialogProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DialogProvider;

export { DialogContext };
