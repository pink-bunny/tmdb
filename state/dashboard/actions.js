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

export const searchMovies = (page = 1, { search }) => ({
  type: types.SEARCH_MOVIES,
  searchQuery: search,
  page
});

export const setSearchMoviesQuery = (searchQuery) => ({
  type: types.SET_SEARCH_MOVIES_QUERY,
  searchQuery
});
