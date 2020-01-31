import * as types from './types';

export const fetchTrendingMovies = (page) => {
  const pageNum = page || 1;
  return ({
    type: types.FETCH_TRANDING_MOVIES,
    pageNum
  });
};

export const fetchTrendingMoviesSuccess = (list) => ({
  type: types.FETCH_TRANDING_MOVIES_SUCCESS,
  list
});

export const fetchTrendingMoviesError = (error) => ({
  type: types.FETCH_TRANDING_MOVIES_ERROR,
  error
});
