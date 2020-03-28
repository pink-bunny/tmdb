import reducer from '../reducer';
import * as types from '../types';

describe('My list reducer', () => {
  const initialState = {
    loading: false,
    error: ''
  };

  it('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_MY_LIST', () => {
    const action = {
      type: types.FETCH_MY_LIST,
      id: 1
    };
    const newState = {
      ...initialState,
      loading: true
    };
    expect(reducer(initialState, action)).toEqual(newState);
  });

  it('should handle FETCH_MY_LIST_SUCCESS', () => {
    const id = 1;
    const action = {
      type: types.FETCH_MY_LIST_SUCCESS,
      id
    };
    const newState = {
      ...initialState,
      loading: false,
      id
    };
    expect(reducer(initialState, action)).toEqual(newState);
  });

  it('should handle FETCH_MY_LIST_ERROR', () => {
    const error = 'Mock error';
    const action = {
      type: types.FETCH_MY_LIST_ERROR,
      error
    };
    const newState = {
      ...initialState,
      loading: false,
      error
    };
    expect(reducer(initialState, action)).toEqual(newState);
  });

  it('should handle CLEAR_LIST_ID_FROM_STATE', () => {
    const action = {
      type: types.CLEAR_LIST_ID_FROM_STATE
    };
    const newState = {
      ...initialState,
      id: null
    };
    expect(reducer(initialState, action)).toEqual(newState);
  });
});
