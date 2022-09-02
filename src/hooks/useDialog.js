import { useContext } from 'react';
import { DialogContext } from 'providers/Dialog';
import { actions } from 'providers/Dialog/reducer';

const useDialog = () => {
  const context = useContext(DialogContext);

  if (context === undefined) {
    throw new Error('useDialog must be used within a DialogContext');
  }

  const openDialog = (content, closable) => {
    context.dispatch({
      type: actions.OPEN_DIALOG,
      payload: content,
      closable,
    });
  };

  const closeDialog = () => {
    context.dispatch({
      type: actions.CLOSE_DIALOG,
    });
  };

  return {
    openDialog,
    closeDialog,
  };
};

export default useDialog;
