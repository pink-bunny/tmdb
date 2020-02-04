import * as types from './types';

export const fetchTrendingMovies = (page = 1) => ({
  type: types.FETCH_TRANDING_MOVIES,
  page
});

export const fetchTrendingMoviesSuccess = (ids, totalItems, currentPage) => ({
  type: types.FETCH_TRANDING_MOVIES_SUCCESS,
  ids,
  totalItems,
  currentPage
});

export const fetchTrendingMoviesError = (error) => ({
  type: types.FETCH_TRANDING_MOVIES_ERROR,
  error
});
