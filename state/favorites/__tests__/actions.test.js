import * as types from '../types';
import {
  fetchFavorites,
  fetchFavoritesSuccess,
  fetchFavoritesError,
  toggleToFavorite,
  toggleToFavoriteSuccess
} from '../actions';

describe('Favorites actions.', () => {
  describe('Fetch favorites', () => {
    it('without page', () => {
      const expectedAction = {
        type: types.FETCH_FAVORITES,
        page: 1
      };
      expect(fetchFavorites()).toEqual(expectedAction);
    });
    it('with page=2', () => {
      const page = 2;
      const expectedAction = {
        type: types.FETCH_FAVORITES,
        page
      };
      expect(fetchFavorites(page)).toEqual(expectedAction);
    });
  });

  it('Success favorites fetching', () => {
    const ids = [1, 2, 3];
    const totalItems = 3;
    const currentPage = 1;
    const expectedAction = {
      type: types.FETCH_FAVORITES_SUCCESS,
      ids,
      totalItems,
      currentPage
    };
    expect(fetchFavoritesSuccess(ids, totalItems, currentPage)).toEqual(expectedAction);
  });

  it('Failure favorites fetching', () => {
    const error = 'Mock error';
    const expectedAction = {
      type: types.FETCH_FAVORITES_ERROR,
      error
    };
    expect(fetchFavoritesError(error)).toEqual(expectedAction);
  });

  describe('Toggle to favorites', () => {
    it('without favorites refetching', () => {
      const id = 1;
      const favorite = true;
      const expectedAction = {
        type: types.TOGGLE_TO_FAVORITES,
        id,
        favorite,
        needRefetchList: false
      };
      expect(toggleToFavorite(id, favorite)).toEqual(expectedAction);
    });
    it('with favorites refetching', () => {
      const id = 1;
      const favorite = true;
      const needRefetchList = true;
      const expectedAction = {
        type: types.TOGGLE_TO_FAVORITES,
        id,
        favorite,
        needRefetchList
      };
      expect(toggleToFavorite(id, favorite, needRefetchList)).toEqual(expectedAction);
    });
  });

  it('Success toggle to favorite', () => {
    const id = 1;
    const isMovieInFavorites = false;
    const expectedAction = {
      type: types.TOGGLE_TO_FAVORITES_SUCCESS,
      id,
      isMovieInFavorites
    };
    expect(toggleToFavoriteSuccess(id, isMovieInFavorites)).toEqual(expectedAction);
  });
});
