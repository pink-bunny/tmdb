import { createLogic } from 'redux-logic';

import { API_KEY } from '../../constants';
import { REQUEST_SESSION } from './types';
import { requestSessionSuccess, requestSessionError } from './actions';

const requestSessionLogic = createLogic({
  type: REQUEST_SESSION,
  warnTimeout: 0,

  async process({ httpClient, action }, dispatch, done) {
    try {
      const { username, password } = action;

      const { data: responseToken } = await httpClient.get(`authentication/token/new?api_key=${API_KEY}`);
      const requestToken = responseToken.request_token;

      await httpClient.post(`authentication/token/validate_with_login?api_key=${API_KEY}`, {
        username,
        password,
        request_token: requestToken
      });

      const { data: responseSessionId } = await httpClient.post(`authentication/session/new?api_key=${API_KEY}`, {
        request_token: requestToken
      });
      const sessionId = responseSessionId.session_id;

      dispatch(requestSessionSuccess(sessionId));
      document.cookie = `session_id=${sessionId}`;
    } catch (error) {
      dispatch(requestSessionError('Usermane or password is wrong. Try again'));
      // setErrors(transformErrorsFromMyApi(error))
    }
    done();
  }
});

export default requestSessionLogic;
