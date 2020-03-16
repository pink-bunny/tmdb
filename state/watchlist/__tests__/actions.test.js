import * as types from '../types';
import {
  fetchWatchlist,
  fetchWatchlistSuccess,
  fetchWatchlistError,
  toggleToWatchlist,
  toggleToWatchlistSuccess
} from '../actions';

describe('Watchlist actions.', () => {
  describe('Fetch watchlist', () => {
    it('without page', () => {
      const expectedAction = {
        type: types.FETCH_WATCHLIST,
        page: 1
      };
      expect(fetchWatchlist()).toEqual(expectedAction);
    });
    it('with page=2', () => {
      const page = 2;
      const expectedAction = {
        type: types.FETCH_WATCHLIST,
        page
      };
      expect(fetchWatchlist(page)).toEqual(expectedAction);
    });
  });

  it('Success watchlist fetching', () => {
    const ids = [1, 2, 3];
    const totalItems = 3;
    const currentPage = 1;
    const expectedAction = {
      type: types.FETCH_WATCHLIST_SUCCESS,
      ids,
      totalItems,
      currentPage
    };
    expect(fetchWatchlistSuccess(ids, totalItems, currentPage)).toEqual(expectedAction);
  });

  it('Failure watchlist fetching', () => {
    const error = 'Mock error';
    const expectedAction = {
      type: types.FETCH_WATCHLIST_ERROR,
      error
    };
    expect(fetchWatchlistError(error)).toEqual(expectedAction);
  });

  describe('Toggle to watchlist', () => {
    it('without watchlist refetching', () => {
      const id = 1;
      const watchlist = true;
      const expectedAction = {
        type: types.TOGGLE_TO_WATCHLIST,
        id,
        watchlist,
        needRefetchWatchlist: false
      };
      expect(toggleToWatchlist(id, watchlist)).toEqual(expectedAction);
    });
    it('with watchlist refetching', () => {
      const id = 1;
      const watchlist = true;
      const needRefetchWatchlist = true;
      const expectedAction = {
        type: types.TOGGLE_TO_WATCHLIST,
        id,
        watchlist,
        needRefetchWatchlist
      };
      expect(toggleToWatchlist(id, watchlist, needRefetchWatchlist)).toEqual(expectedAction);
    });
  });

  it('Success toggle to watchlist', () => {
    const id = 1;
    const isMovieInWatchlist = false;
    const expectedAction = {
      type: types.TOGGLE_TO_WATCHLIST_SUCCESS,
      id,
      isMovieInWatchlist
    };
    expect(toggleToWatchlistSuccess(id, isMovieInWatchlist)).toEqual(expectedAction);
  });
});
