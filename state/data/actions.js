import * as types from './types';
import { TOGGLE_TO_WATCHLIST_SUCCESS } from '../movie/types';

export const mergeMoviesList = (movies) => ({
  type: types.MERGE_MOVIES_LIST,
  movies
});

export const mergeListsList = (lists) => ({
  type: types.MERGE_LISTS_LIST,
  lists
});

export const toggleToWatchlistSuccess = (id, isMovieInWatchlist) => ({
  type: TOGGLE_TO_WATCHLIST_SUCCESS,
  id,
  isMovieInWatchlist
});
