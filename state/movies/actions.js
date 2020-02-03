import * as types from './types';

export const fetchTrendingMovies = (page = 1) => ({
  type: types.FETCH_TRANDING_MOVIES,
  page
});

export const fetchTrendingMoviesSuccess = (list, totalItems, currentPage) => ({
  type: types.FETCH_TRANDING_MOVIES_SUCCESS,
  list,
  totalItems,
  currentPage
});

export const fetchTrendingMoviesError = (error) => ({
  type: types.FETCH_TRANDING_MOVIES_ERROR,
  error
});
