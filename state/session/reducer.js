import * as types from './types';

const initialState = {
  sessionId: '',
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
    case types.REQUEST_SESSION_ERROR:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}

export default sessionReducer;
