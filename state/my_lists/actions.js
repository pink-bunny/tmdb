
import * as types from './types';

export const fetchMyLists = () => ({
  type: types.FETCH_MY_LISTS
});

export const fetchMyListsSuccess = (ids) => ({
  type: types.FETCH_MY_LISTS_SUCCESS,
  ids
});

export const fetchMyListsError = (error) => ({
  type: types.FETCH_MY_LISTS_ERROR,
  error
});
