import * as types from './types';

export const fetchTrendingMovies = () => ({
  type: types.FETCH_TRANDING_MOVIES
});
export const fetchTrendingMoviesSuccess = (list) => ({
  type: types.FETCH_TRANDING_MOVIES_SUCCESS,
  list
});
export const fetchTrendingMoviesError = () => ({
  type: types.FETCH_TRANDING_MOVIES_ERROR
});
