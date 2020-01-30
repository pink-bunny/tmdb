import { createLogic } from 'redux-logic';
import cookie from 'cookie_js';

import { COMPLETE_SESSION } from '../types';
import { completeSession } from '../actions';

const requestSessionLogic = createLogic({
  type: COMPLETE_SESSION,
  warnTimeout: 0,

  process(dispatch, done) {
    cookie.remove('session_id');
    dispatch(completeSession());
    done();
  }
});

export default requestSessionLogic;
