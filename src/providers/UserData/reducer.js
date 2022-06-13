const actions = {
  SET_TOKEN: 'USER_DATA/SET_TOKEN',
  SET_USERNAME: 'USER_DATA/SET_USERNAME',
  CLEAR: 'USER_DATA/CLEAR',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_TOKEN: {
      return {
        ...state,
        token: action.payload,
      };
    }

    case actions.SET_USERNAME: {
      return {
        ...state,
        username: action.payload,
      };
    }

    case actions.CLEAR: {
      return {
        ...state,
        token: null,
        username: null,
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export default reducer;

export { actions };
