import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import Snackbar from 'components/Snackbar';
import reducer, { actions } from './reducer';

const initialState = {
  open: false,
  message: null,
};

const SnackbarContext = React.createContext({});

const SnackbarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  const handleClose = () => {
    dispatch({
      type: actions.CLOSE_SNACKBAR,
    });
  };

  return (
    <SnackbarContext.Provider value={value}>
      {children}
      <Snackbar
        onClose={handleClose}
        open={state.open}
        message={state.message}
      />
    </SnackbarContext.Provider>
  );
};

SnackbarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SnackbarProvider;

export { SnackbarContext };
