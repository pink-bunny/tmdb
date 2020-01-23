import * as types from './types';

const initialState = {
  session_id: '',
  request_token: null
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
        request_token: action.token
      };
    default:
      return state;
  }
}

export default sessionReducer;
