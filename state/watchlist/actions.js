import * as types from './types';

export const fetchWatchlist = (page = 1) => ({
  type: types.FETCH_WATCHLIST,
  page
});
export const fetchWatchlistSuccess = (ids, totalItems, currentPage) => ({
  type: types.FETCH_WATCHLIST_SUCCESS,
  ids,
  totalItems,
  currentPage
});

export const fetchWatchlistError = (error) => ({
  type: types.FETCH_WATCHLIST_ERROR,
  error
});

export const toggleToWatchlist = (id, watchlist, needRefetchList = false) => ({
  type: types.TOGGLE_TO_WATCHLIST,
  id,
  watchlist,
  needRefetchList
});

export const toggleToWatchlistSuccess = (id, isMovieInWatchlist) => ({
  type: types.TOGGLE_TO_WATCHLIST_SUCCESS,
  id,
  isMovieInWatchlist
});
