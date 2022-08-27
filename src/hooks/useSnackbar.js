import { useContext } from 'react';
import { SnackbarContext } from 'providers/Snackbar';
import { actions } from 'providers/Snackbar/reducer';

const useSnackbar = () => {
  const context = useContext(SnackbarContext);

  if (context === undefined) {
    throw new Error('useSnackbar must be used within a SnackbarContext');
  }

  const openSnackbar = (message) => {
    context.dispatch({
      type: actions.OPEN_SNACKBAR,
      payload: message,
    });
  };

  const closeSnackbar = () => {
    context.dispatch({
      type: actions.CLOSE_SNACKBAR,
    });
  };

  return {
    openSnackbar,
    closeSnackbar,
  };
};

export default useSnackbar;
