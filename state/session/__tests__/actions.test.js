import * as types from '../types';
import {
  requestSession,
  requestSessionSuccess,
  completeSession,
  completeSessionSuccess
} from '../actions';

describe('Session actions.', () => {
  it('Request session', () => {
    const username = 'mock_username';
    const password = 'mock_password';
    const setErrors = jest.fn();
    const setSubmitting = jest.fn();
    const expectedAction = {
      type: types.REQUEST_SESSION,
      username,
      password,
      setErrors,
      setSubmitting
    };
    expect(requestSession({ username, password }, setErrors, setSubmitting))
      .toEqual(expectedAction);
  });

  it('Success request session', () => {
    const sessionId = '1q2w3e4r5t';
    const username = 'mock_username';
    const expectedAction = {
      type: types.REQUEST_SESSION_SUCCESS,
      sessionId,
      username
    };
    expect(requestSessionSuccess(sessionId, username)).toEqual(expectedAction);
  });

  it('Complete session', () => {
    const expectedAction = {
      type: types.COMPLETE_SESSION
    };
    expect(completeSession()).toEqual(expectedAction);
  });

  it('Success completing session', () => {
    const expectedAction = {
      type: types.COMPLETE_SESSION_SUCCESS
    };
    expect(completeSessionSuccess()).toEqual(expectedAction);
  });
});
