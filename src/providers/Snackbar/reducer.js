const actions = {
  OPEN_SNACKBAR: 'SNACKBAR/OPEN',
  CLOSE_SNACKBAR: 'SNACKBAR/CLOSE',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.OPEN_SNACKBAR: {
      return {
        ...state,
        open: true,
        message: action.payload,
      };
    }

    case actions.CLOSE_SNACKBAR: {
      return {
        ...state,
        open: false,
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export default reducer;

export { actions };
