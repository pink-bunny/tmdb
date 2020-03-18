
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

export const createMyList = ({ name, description }, setErrors, hideModal) => ({
  type: types.CREATE_MY_LIST,
  name,
  description,
  setErrors,
  hideModal
});

export const deleteMyList = (id, hideModal) => ({
  type: types.DELETE_MY_LIST,
  id,
  hideModal
});

export const deleteMyListError = (error, hideModal) => ({
  type: types.DELETE_MY_LIST_ERROR,
  error,
  hideModal
});

export const toggleToList = (listId, movieId) => ({
  type: types.TOGGLE_TO_LIST,
  listId,
  movieId
});
