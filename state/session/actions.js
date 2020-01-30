import * as types from './types';

export const requestSession = ({ username, password }, setErrors, setSubmitting) => ({
  type: types.REQUEST_SESSION,
  username,
  password,
  setErrors,
  setSubmitting
});

export const requestSessionSuccess = (sessionId) => ({
  type: types.REQUEST_SESSION_SUCCESS,
  sessionId
});

export const completeSession = () => ({
  type: types.COMPLETE_SESSION
});
