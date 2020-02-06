import * as types from './types';

export const fetchTrendingMovies = (page = 1) => ({
  type: types.FETCH_TRENDING_MOVIES,
  page
});

export const fetchMoviesSuccess = (ids, totalItems, currentPage) => ({
  type: types.FETCH_MOVIES_SUCCESS,
  ids,
  totalItems,
  currentPage
});

export const fetchMoviesError = (error) => ({
  type: types.FETCH_MOVIES_ERROR,
  error
});

export const searchMovies = (search, page = 1) => ({
  type: types.SEARCH_MOVIES,
  searchQuery: search,
  page
});
