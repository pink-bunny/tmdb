import reducer from '../reducer';
import * as types from '../types';

describe('Favorites reducer', () => {
  const initialState = {
    loading: false,
    error: '',
    totalItems: 0,
    currentPage: 0
  };
  it('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_FAVORITES', () => {
    const action = {
      type: types.FETCH_FAVORITES,
      page: 1
    };
    const newState = {
      ...initialState,
      loading: true
    };
    expect(reducer(initialState, action)).toEqual(newState);
  });

  it('should handle FETCH_FAVORITES_SUCCESS', () => {
    const ids = [1, 2, 3];
    const totalItems = 3;
    const currentPage = 1;
    const action = {
      type: types.FETCH_FAVORITES_SUCCESS,
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

  it('should handle FETCH_FAVORITES_ERROR', () => {
    const error = 'Mock error';
    const action = {
      type: types.FETCH_FAVORITES_ERROR,
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
