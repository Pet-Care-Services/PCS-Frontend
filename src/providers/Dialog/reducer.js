const actions = {
  OPEN_DIALOG: 'DIALOG/OPEN',
  CLOSE_DIALOG: 'DIALOG/CLOSE',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.OPEN_DIALOG: {
      return {
        ...state,
        open: true,
        content: action.payload,
      };
    }

    case actions.CLOSE_DIALOG: {
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
