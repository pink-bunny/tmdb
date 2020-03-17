import * as types from './types';

export const fetchFavorites = (page = 1) => ({
  type: types.FETCH_FAVORITES,
  page
});
export const fetchFavoritesSuccess = (ids, totalItems, currentPage) => ({
  type: types.FETCH_FAVORITES_SUCCESS,
  ids,
  totalItems,
  currentPage
});

export const fetchFavoritesError = (error) => ({
  type: types.FETCH_FAVORITES_ERROR,
  error
});

export const toggleToFavorite = (id, favorite, needRefetchList = false) => ({
  type: types.TOGGLE_TO_FAVORITES,
  id,
  favorite,
  needRefetchList
});

export const toggleToFavoriteSuccess = (id, isMovieInFavorites) => ({
  type: types.TOGGLE_TO_FAVORITES_SUCCESS,
  id,
  isMovieInFavorites
});
