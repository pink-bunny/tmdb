import * as types from './types';

export const requestSession = ({ username, password }) => ({
  type: types.REQUEST_SESSION,
  username,
  password
});

export const requestSessionSuccess = (sessionId) => ({
  type: types.REQUEST_SESSION_SUCCESS,
  sessionId
});

export const requestSessionError = (error) => ({
  type: types.REQUEST_SESSION_ERROR,
  error
});
