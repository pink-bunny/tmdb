import { createLogic } from 'redux-logic';

import { API_KEY } from '../../constants';
import { SESSION_REQUEST_TOKEN } from './types';
import { sessionRequestTokenSuccess } from './actions';

const sessionRequestTokenLogic = createLogic({
  type: SESSION_REQUEST_TOKEN,
  warnTimeout: 0,

  async process({ httpClient }, dispatch, done) {
    try {
      const { data } = await httpClient.get(`authentication/token/new?api_key=${API_KEY}`);
      console.log('RESPONSE', data);
    } catch (error) {
      console.log('ERROR', error);
    }
    done();
  }
});

export default sessionRequestTokenLogic;
