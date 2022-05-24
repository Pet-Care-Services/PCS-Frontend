const actions = {
  OPEN_SIDEBAR: 'SIDEBAR/OPEN',
  CLOSE_SIDEBAR: 'SIDEBAR/CLOSE',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.OPEN_SIDEBAR: {
      return {
        ...state,
        open: true,
      };
    }

    case actions.CLOSE_SIDEBAR: {
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
