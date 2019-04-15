import {actionTypes} from './actions';

const getInitialState = () => ({
  theme: 'light',
});

const app = (state = getInitialState(), {type, payload}) => {
  switch(type) {
    case actionTypes.SET_THEME:
      return {...state, ...payload}; // payload = { theme: <VALUE>}
    default: 
      return state;
  }
};

export default app;