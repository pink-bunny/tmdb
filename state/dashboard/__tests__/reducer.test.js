import reducer from '../reducer';
import * as types from '../types';

describe('Dashboard reducer', () => {
  const initialState = {
    loading: false,
    error: '',
    ids: [],
    totalItems: 0,
    currentPage: 0,
    searchQuery: ''
  };
  it('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_TRENDING_MOVIES', () => {
    const action = {
      type: types.FETCH_TRENDING_MOVIES,
      page: 1
    };
    const newState = {
      ...initialState,
      loading: true
    };
    expect(reducer(initialState, action)).toEqual(newState);
  });

  it('should handle FETCH_MOVIES_SUCCESS', () => {
    const action = {
      type: types.FETCH_MOVIES_SUCCESS,
      ids: [1, 2, 3],
      totalItems: 21,
      currentPage: 2
    };
    const newState = {
      ...initialState,
      loading: false,
      ids: [1, 2, 3],
      totalItems: 21,
      currentPage: 2
    };
    expect(reducer(initialState, action)).toEqual(newState);
  });

  it('should handle FETCH_MOVIES_ERROR', () => {
    const action = {
      type: types.FETCH_MOVIES_ERROR,
      error: 'Mock error'
    };
    const newState = {
      ...initialState,
      loading: false,
      error: 'Mock error'
    };
    expect(reducer(initialState, action)).toEqual(newState);
  });

  it('should handle SEARCH_MOVIES', () => {
    const action = {
      type: types.SEARCH_MOVIES,
      searchQuery: 'Mock query',
      page: 1
    };
    const newState = {
      ...initialState,
      loading: true,
      searchQuery: 'Mock query'
    };
    expect(reducer(initialState, action)).toEqual(newState);
  });
});
