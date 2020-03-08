import * as types from '../types';
import {
  toggleToWatchlist,
  toggleToWatchlistSuccess
} from '../actions';

describe('Watchlist actions.', () => {
  it('Toggle to watchlist', () => {
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
