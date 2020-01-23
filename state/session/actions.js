import * as types from './types';

export const sessionRequestToken = () => ({
  type: types.SESSION_REQUEST_TOKEN
});

export const sessionRequestTokenSuccess = (token) => ({
  type: types.SESSION_REQUEST_TOKEN_SUCCESS,
  token
});

export const sessionSetId = (id) => ({
  type: types.SESSION_SET_ID,
  id
});
