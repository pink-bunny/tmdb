import * as types from './types';

export const fetchMovie = (id) => ({
  type: types.FETCH_MOVIE,
  id
});

export const fetchMovieSuccess = (id) => ({
  type: types.FETCH_MOVIE_SUCCESS,
  id
});

export const fetchMovieError = (error) => ({
  type: types.FETCH_MOVIE_ERROR,
  error
});

export const clearMovieFromState = () => ({
  type: types.CLEAR_MOVIE_FROM_STATE
});
