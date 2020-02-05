import * as types from './types';

export const fetchTrendingMovies = (page = 1) => ({
  type: types.FETCH_TRENDING_MOVIES,
  page
});

export const fetchTrendingMoviesSuccess = (ids, totalItems, currentPage) => ({
  type: types.FETCH_TRENDING_MOVIES_SUCCESS,
  ids,
  totalItems,
  currentPage
});

export const fetchTrendingMoviesError = (error) => ({
  type: types.FETCH_TRENDING_MOVIES_ERROR,
  error
});

export const searchMovies = ({ search }, setErrors, setSubmitting, page = 1) => ({
  type: types.SEARCH_MOVIES,
  search,
  page,
  setErrors,
  setSubmitting
});
