import * as types from './types';

export const fetchMyList = (id) => ({
  type: types.FETCH_MY_LIST,
  id
});

export const fetchMyListSuccess = (movieId, listMoviesIds) => ({
  type: types.FETCH_MY_LIST_SUCCESS,
  movieId,
  moviesIds: listMoviesIds
});

export const fetchMyListError = (error) => ({
  type: types.FETCH_MY_LIST_ERROR,
  error
});
