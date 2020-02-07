import * as types from './types';

export const mergeMoviesList = (movies) => ({
  type: types.MERGE_MOVIES_LIST,
  movies
});

export const mergeListsList = (lists) => ({
  type: types.MERGE_LISTS_LIST,
  lists
});
