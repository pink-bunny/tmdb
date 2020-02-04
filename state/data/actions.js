import * as types from './types';

export const mergeMoviesList = (movies) => ({
  type: types.MERGE_MOVIES_LIST,
  movies
});
