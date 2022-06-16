const actions = {
  OPEN_CHAT: 'CHAT/OPEN',
  CLOSE_CHAT: 'CHAT/CLOSE',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.OPEN_CHAT: {
      return {
        ...state,
        open: true,
      };
    }

    case actions.CLOSE_CHAT: {
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
