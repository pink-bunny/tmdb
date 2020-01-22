import { createLogic } from 'redux-logic';

import { API_KEY } from '../../constants';
import { SESSION_REQUEST_TOKEN } from './types';
import { sessionRequestTokenSuccess } from './actions';

const sessionRequestTokenLogic = createLogic({
  type: SESSION_REQUEST_TOKEN,
  warnTimeout: 0,

  process({ httpClient }, dispatch, done) {
    httpClient.get(`3/authentication/token/new?api_key=${API_KEY}`)
      .then(
        (payload) => {
          const token = payload.data.request_token;
          dispatch(sessionRequestTokenSuccess(token));
        }
      )
      .catch(
        /* eslint-disable no-console */
        (err) => console.error('ERROR', err)
      )
      .then(() => done());
  }
});

export default sessionRequestTokenLogic;
