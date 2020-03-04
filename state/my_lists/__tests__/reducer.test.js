import reducer from '../reducer';
import * as types from '../types';

describe('My lists reducer', () => {
  const initialState = {
    loading: false,
    error: '',
    ids: []
  };
  it('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_MY_LISTS', () => {
    const action = {
      type: types.FETCH_MY_LISTS
    };
    const newState = {
      ...initialState,
      loading: true,
      deleteMyListError: ''
    };
    expect(reducer(initialState, action)).toEqual(newState);
  });

  it('should handle FETCH_MY_LISTS_SUCCESS', () => {
    const action = {
      type: types.FETCH_MY_LISTS_SUCCESS,
      ids: [1, 2, 3]
    };
    const newState = {
      ...initialState,
      loading: false,
      ids: [1, 2, 3]
    };
    expect(reducer(initialState, action)).toEqual(newState);
  });

  it('should handle FETCH_MY_LISTS_ERROR', () => {
    const action = {
      type: types.FETCH_MY_LISTS_ERROR,
      error: 'Mock error'
    };
    const newState = {
      ...initialState,
      loading: false,
      error: 'Mock error'
    };
    expect(reducer(initialState, action)).toEqual(newState);
  });

  it('should handle DELETE_MY_LIST_ERROR', () => {
    const action = {
      type: types.DELETE_MY_LIST_ERROR,
      error: 'Mock error',
      hideModal: jest.fn()
    };
    const newState = {
      ...initialState,
      deleteMyListError: 'Mock error'
    };
    expect(reducer(initialState, action)).toEqual(newState);
  });
});
