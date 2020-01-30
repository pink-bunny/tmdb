import { createLogic } from 'redux-logic';
import cookie from 'cookie_js';

import { API_KEY } from '../../../constants';
import { COMPLETE_SESSION } from '../types';

/* eslint-disable no-console */
const requestSessionLogic = createLogic({
  type: COMPLETE_SESSION,
  warnTimeout: 0,

  async process({ httpClient }, dispatch, done) {
    try {
      const sessionId = cookie.get('session_id');

      console.log('sessionId', sessionId);
      console.log('API_KEY', API_KEY);
      const { data } = await httpClient.delete(`authentication/session?api_key=${API_KEY}`, {
        session_id: sessionId
      });
      console.log('data', data);

      cookie.remove('session_id');

    } catch (error) {
      console.log(error);
    }
    done();
  }
});

export default requestSessionLogic;
