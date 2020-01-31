import * as types from './types';

export const requestSession = ({ username, password }, setErrors, setSubmitting) => ({
  type: types.REQUEST_SESSION,
  username,
  password,
  setErrors,
  setSubmitting
});

export const requestSessionSuccess = (sessionId, username) => ({
  type: types.REQUEST_SESSION_SUCCESS,
  sessionId,
  username
});

export const completeSession = () => ({
  type: types.COMPLETE_SESSION
});
export const completeSessionSuccess = () => ({
  type: types.COMPLETE_SESSION_SUCCESS
});
