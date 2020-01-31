import cookie from 'cookie_js';
import * as types from './types';

const sessionId = cookie.get('sessionId');
const username = cookie.get('username');

const initialState = {
  sessionId,
  username
};

function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_SESSION_SUCCESS:
      return {
        ...state,
        sessionId: action.sessionId,
        username: action.username
      };
    case types.COMPLETE_SESSION_SUCCESS:
      return {
        ...state,
        sessionId: null,
        username: null
      };
    default:
      return state;
  }
}

export default sessionReducer;
