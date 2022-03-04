import { MODE } from './consts';

const actions = {
  TOGGLE_THEME: 'THEME/TOGGLE_THEME',
};

const reducer = (state, action) => {
  switch (action.type) {
  case actions.TOGGLE_THEME: {
    return {
      ...state,
      mode: state.mode === MODE.LIGHT ? MODE.DARK : MODE.LIGHT,
    };
  }

  default: {
    throw new Error(`Unhandled action type: ${action.type}`);
  }
  }
};

export default reducer;

export { actions };
