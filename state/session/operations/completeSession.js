import { createLogic } from 'redux-logic';
import cookie from 'cookie_js';

import { COMPLETE_SESSION } from '../types';
import { completeSessionSuccess } from '../actions';

const completeSessionLogic = createLogic({
  type: COMPLETE_SESSION,

  process(_, dispatch, done) {
    cookie.remove('sessionId', 'username');
    dispatch(completeSessionSuccess());
    done();
  }
});

export default completeSessionLogic;
