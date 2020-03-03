import * as types from '../types';
import { TOGGLE_TO_WATCHLIST_SUCCESS } from '../../movie/types';
import {
  mergeMoviesList,
  mergeListsList,
  toggleToWatchlistSuccess
} from '../actions';

describe('Data actions.', () => {
  it('Merge movies list', () => {
    const movies = { 1: {}, 2: {}, 3: {} };
    const expectedAction = {
      type: types.MERGE_MOVIES_LIST,
      movies
    };
    expect(mergeMoviesList(movies)).toEqual(expectedAction);
  });

  it('Merge lists list', () => {
    const lists = { 1: {}, 2: {}, 3: {} };
    const expectedAction = {
      type: types.MERGE_LISTS_LIST,
      lists
    };
    expect(mergeListsList(lists)).toEqual(expectedAction);
  });

  it('Success toggle to watchlist', () => {
    const id = 1;
    const isMovieInWatchlist = false;
    const expectedAction = {
      type: TOGGLE_TO_WATCHLIST_SUCCESS,
      id,
      isMovieInWatchlist
    };
    expect(toggleToWatchlistSuccess(id, isMovieInWatchlist)).toEqual(expectedAction);
  });
});
