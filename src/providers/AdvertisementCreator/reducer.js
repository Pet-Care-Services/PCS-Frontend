import initialState from './initialState';

const actions = {
  SET_TYPE: 'ADVERTISEMENT_CREATOR/SET_TYPE',
  SET_ANIMAL: 'ADVERTISEMENT_CREATOR/SET_ANIMAL',
  SET_DATA: 'ADVERTISEMENT_CREATOR/SET_DATA',
  CLEAR: 'ADVERTISEMENT_CREATOR/CLEAR',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_TYPE: {
      return {
        ...state,
        type: action.payload,
      };
    }

    case actions.SET_ANIMAL: {
      return {
        ...state,
        animal: action.payload,
      };
    }

    case actions.SET_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }

    case actions.CLEAR: {
      return initialState;
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export default reducer;

export { actions };
