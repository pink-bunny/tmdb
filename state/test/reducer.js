import * as types from './types';

const initialState = {
  greeting: ''
};

function sayHiReducer(state = initialState, action) {
  switch (action.type) {
    case types.SAY_HI:
      return {
        ...state,
        greeting: action.text
      };
    default:
      return state;
  }
}

export default sayHiReducer;
