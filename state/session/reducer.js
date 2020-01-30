import cookie from 'cookie_js';
import * as types from './types';

const sessionId = cookie.get('session_id');

const initialState = {
  sessionId
};

function sessionReducer(state = initialState, action) {
  switch (action.type) {
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
