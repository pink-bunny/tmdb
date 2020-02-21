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

export const toggleToWatchlist = (id, visible) => ({
  type: types.TOGGLE_TO_WATCHLIST,
  id,
  visible
});

export const toggleToWatchlistSuccess = () => ({
  type: types.TOGGLE_TO_WATCHLIST_SUCCESS
});
