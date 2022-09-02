import { omit } from 'lodash';

const actions = {
  SET_TOKEN: 'USER_DATA/SET_TOKEN',
  SET_USER_DATA: 'USER_DATA/SET_USER_DATA',
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

    case actions.SET_USER_DATA: {
      return {
        ...state,
        ...omit(action.payload, 'token'),
      };
    }

    case actions.CLEAR: {
      return {
        token: null,
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export default reducer;

export { actions };
