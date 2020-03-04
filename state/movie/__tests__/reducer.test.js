import reducer from '../reducer';
import * as types from '../types';

describe('Movie reducer', () => {
  const initialState = {
    loading: false
  };
  it('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_MOVIE', () => {
    const action = {
      type: types.FETCH_MOVIE,
      id: 1
    };
    const newState = {
      ...initialState,
      loading: true
    };
    expect(reducer(initialState, action)).toEqual(newState);
  });

  it('should handle FETCH_MOVIE_SUCCESS', () => {
    const action = {
      type: types.FETCH_MOVIE_SUCCESS,
      id: 1
    };
    const newState = {
      ...initialState,
      loading: false,
      id: 1
    };
    expect(reducer(initialState, action)).toEqual(newState);
  });

  it('should handle FETCH_MOVIE_ERROR', () => {
    const action = {
      type: types.FETCH_MOVIE_ERROR,
      error: 'Mock error'
    };
    const newState = {
      ...initialState,
      loading: false,
      error: 'Mock error'
    };
    expect(reducer(initialState, action)).toEqual(newState);
  });
});
