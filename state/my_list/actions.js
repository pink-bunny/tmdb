import * as types from './types';

export const fetchMyList = (id) => ({
  type: types.FETCH_MY_LIST,
  id
});

export const fetchMyListSuccess = (id) => ({
  type: types.FETCH_MY_LIST_SUCCESS,
  id
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

export const deleteMyList = (id, hideModal, needRedirect) => ({
  type: types.DELETE_MY_LIST,
  id,
  hideModal,
  needRedirect
});

export const deleteMyListError = (error, hideModal) => ({
  type: types.DELETE_MY_LIST_ERROR,
  error,
  hideModal
});

export const addToList = (listId, movieId, closePopover = null) => ({
  type: types.ADD_TO_LIST,
  listId,
  movieId,
  closePopover
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

export const clearListIdFromState = () => ({
  type: types.CLEAR_LIST_ID_FROM_STATE
});
