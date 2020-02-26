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

export const toggleToWatchlist = (id, watchlist) => ({
  type: types.TOGGLE_TO_WATCHLIST,
  id,
  watchlist
});
