import { createLogic } from 'redux-logic';
import cookie from 'cookie_js';

import { COMPLETE_SESSION } from '../types';
import { completeSessionSuccess } from '../actions';

const requestSessionLogic = createLogic({
  type: COMPLETE_SESSION,
  warnTimeout: 0,

  process(_, dispatch, done) {
    cookie.remove('sessionId', 'username');
    dispatch(completeSessionSuccess());
    done();
  }
});

export default requestSessionLogic;
