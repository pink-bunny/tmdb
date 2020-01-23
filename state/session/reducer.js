import * as types from './types';

const initialState = {
  sessionId: '',
  requestToken: null
};

function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case types.SESSION_REQUEST_TOKEN:
      return {
        ...state,
        requestToken: action.text
      };
    case types.SESSION_REQUEST_TOKEN_SUCCESS:
      return {
        ...state,
        requestToken: action.token
      };
    case types.SESSION_SET_ID:
      return {
        ...state,
        sessionId: action.id
      };
    default:
      return state;
  }
}

export default sessionReducer;
