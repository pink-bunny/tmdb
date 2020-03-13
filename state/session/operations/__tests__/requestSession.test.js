import cookie from 'cookie_js';

import requestSessionLogic from '../requestSession';
import { REQUEST_SESSION } from '../../types';
import { mockMultiHttpClient } from '../../../../utils/testsHelpers/mockHttpClient';
import {
  authenticationTokenResponseSuccess,
  authenticationSessionResponseSuccess
} from '../__mocks__/requestSession';
import { requestSessionSuccess } from '../../actions';

jest.mock('cookie_js', () => ({
  set: jest.fn()
}));

jest.mock('../../actions', () => ({
  requestSessionSuccess: jest.fn()
}));

describe('requestSession logic', () => {
  const username = 'mock name';
  const password = '123456';
  const setErrors = jest.fn();
  const setSubmitting = jest.fn();
  const action = {
    type: REQUEST_SESSION,
    username,
    password,
    setErrors,
    setSubmitting
  };
  const dispatch = jest.fn();
  const done = jest.fn();
  let httpClient;
  httpClient = mockMultiHttpClient([
    { method: 'get', response: authenticationTokenResponseSuccess },
    { method: 'post', response: {} },
    { method: 'post', response: authenticationSessionResponseSuccess }
  ]);
  requestSessionLogic.process({ httpClient, action }, dispatch, done);

  it('matches snapshot', () => {
    expect(requestSessionLogic).toMatchSnapshot();
  });

  describe('httpClient', () => {
    const requestAuthTokenPath = 'authentication/token/new';
    const requestTokenPath = 'authentication/token/validate_with_login';
    const { data: responseToken } = authenticationTokenResponseSuccess;
    const requestToken = responseToken.request_token;
    const requestTokenBody = {
      username,
      password,
      request_token: requestToken /* eslint-disable-line */
    };
    const requestAuthSessionPath = 'authentication/session/new';
    const requestAuthSessionBody = {
      request_token: requestToken /* eslint-disable-line */
    };
    it('called with right arguments', () => {
      expect(httpClient.get).toHaveBeenNthCalledWith(1, requestAuthTokenPath);
      expect(httpClient.post).toHaveBeenNthCalledWith(1, requestTokenPath, requestTokenBody);
      expect(httpClient.post)
        .toHaveBeenNthCalledWith(2, requestAuthSessionPath, requestAuthSessionBody);
    });
  });

  describe('success.', () => {
    const { data: responseSessionId } = authenticationSessionResponseSuccess;
    const sessionId = responseSessionId.session_id;
    it('Dispatch requestSessionSuccess() with session id and username', () => {
      expect(requestSessionSuccess).toHaveBeenCalledWith(sessionId, username);
    });

    it('Set session id and username to cookie', () => {
      expect(cookie.set).toHaveBeenCalledWith({ sessionId, username });
    });
  });

  describe('failure.', () => {
    beforeAll(() => {
      httpClient = mockMultiHttpClient([
        { method: 'post', response: {}, reject: true }
      ]);
      requestSessionLogic.process({ httpClient, action }, dispatch, done);
    });

    it('setSubmitting called with false', () => {
      expect(setSubmitting).toHaveBeenCalledWith(false);
    });
    it('setErrors called with server error', () => {
      expect(setErrors).toHaveBeenCalledWith({ serverError: 'Username or password is wrong. Try again' });
    });
  });

  it('have been called done()', () => {
    expect(done).toHaveBeenCalled();
  });
});
