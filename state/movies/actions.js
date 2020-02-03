import * as types from './types';

export const fetchTrendingMovies = (pageNum = 1) => ({
  type: types.FETCH_TRANDING_MOVIES,
  pageNum
});

export const fetchTrendingMoviesSuccess = (list, totalPages) => ({
  type: types.FETCH_TRANDING_MOVIES_SUCCESS,
  list,
  totalPages
});

export const fetchTrendingMoviesError = (error) => ({
  type: types.FETCH_TRANDING_MOVIES_ERROR,
  error
});
