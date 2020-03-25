import * as types from './types';

export const fetchMyList = (id) => ({
  type: types.FETCH_MY_LIST,
  id
});

export const fetchMyListSuccess = (movieId) => ({
  type: types.FETCH_MY_LIST_SUCCESS,
  movieId
});

export const fetchMyListError = (error) => ({
  type: types.FETCH_MY_LIST_ERROR,
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

export const removeFromList = (listId, movieId) => ({
  type: types.REMOVE_FROM_LIST,
  listId,
  movieId
});

export const createAndAddToList = ({ name, description }, setErrors, hideModal, movieId) => ({
  type: types.CREATE_AND_ADD_TO_LIST,
  name,
  description,
  setErrors,
  hideModal,
  movieId
});
