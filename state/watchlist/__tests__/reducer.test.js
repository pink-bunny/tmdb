import reducer from '../reducer';
import * as types from '../types';

describe('Watchlist reducer', () => {
  const initialState = {
    loading: false,
    error: '',
    totalItems: 0,
    currentPage: 0
  };
  it('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_WATCHLIST', () => {
    const action = {
      type: types.FETCH_WATCHLIST,
      page: 1
    };
    const newState = {
      ...initialState,
      loading: true
    };
    expect(reducer(initialState, action)).toEqual(newState);
  });

  it('should handle FETCH_WATCHLIST_SUCCESS', () => {
    const ids = [1, 2, 3];
    const totalItems = 3;
    const currentPage = 1;
    const action = {
      type: types.FETCH_WATCHLIST_SUCCESS,
      ids,
      totalItems,
      currentPage
    };
    const newState = {
      ...initialState,
      loading: false,
      ids,
      totalItems,
      currentPage
    };
    expect(reducer(initialState, action)).toEqual(newState);
  });

  it('should handle FETCH_WATCHLIST_ERROR', () => {
    const error = 'Mock error';
    const action = {
      type: types.FETCH_WATCHLIST_ERROR,
      error
    };
    const newState = {
      ...initialState,
      loading: false,
      error
    };
    expect(reducer(initialState, action)).toEqual(newState);
  });
});
