import { createLogic } from 'redux-logic';
import cookie from 'cookie_js';

import { REQUEST_SESSION } from '../types';
import { requestSessionSuccess } from '../actions';

const requestSessionLogic = createLogic({
  type: REQUEST_SESSION,
  warnTimeout: 0,

  async process({ httpClient, action }, dispatch, done) {
    const {
      username,
      password,
      setErrors,
      setSubmitting
    } = action;

    try {
      const { data: responseToken } = await httpClient.get('authentication/token/new');
      const requestToken = responseToken.request_token;

      await httpClient.post('authentication/token/validate_with_login', {
        username,
        password,
        /* eslint-disable-next-line */
        request_token: requestToken
      });

      const { data: responseSessionId } = await httpClient.post('authentication/session/new', {
        /* eslint-disable-next-line */
        request_token: requestToken
      });
      const sessionId = responseSessionId.session_id;

      dispatch(requestSessionSuccess(sessionId));
      cookie.set('session_id', sessionId);
    } catch (error) {
      setSubmitting(false);
      setErrors({ serverError: 'Username or password is wrong. Try again' });
    }
    done();
  }
});

export default requestSessionLogic;
