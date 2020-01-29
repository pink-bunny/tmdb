import cookie from 'cookie_js';
import * as types from './types';

const checkSessionIdInCookie = cookie.get('session_id');

const initialState = {
  sessionId: checkSessionIdInCookie,
  requestToken: null
};

function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_SESSION:
      return {
        ...state,
        requestToken: action.text
      };
    case types.REQUEST_SESSION_SUCCESS:
      return {
        ...state,
        sessionId: action.sessionId
      };
    default:
      return state;
  }
}

export default sessionReducer;
