import reducer from '../reducer';
import * as types from '../types';
import { TOGGLE_TO_WATCHLIST_SUCCESS } from '../../watchlist/types';
import { TOGGLE_TO_FAVORITES_SUCCESS } from '../../favorites/types';

describe('Data reducer', () => {
  const initialState = {
    movies: {},
    lists: {},
    movie: {}
  };

  it('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle MERGE_LISTS_LIST', () => {
    const action = {
      type: types.MERGE_LISTS_LIST,
      lists: { 1: {}, 2: {} }
    };
    const newState = {
      ...initialState,
      lists: {
        1: {},
        2: {}
      }
    };
    expect(reducer(initialState, action)).toEqual(newState);
  });

  it('should handle MERGE_MOVIES_LIST', () => {
    const action = {
      type: types.MERGE_MOVIES_LIST,
      movies: {
        1: { id: 1, title: 'Mock title', watchlist: false },
        2: { id: 2, title: 'Mock title', watchlist: false }
      }
    };
    const newState = {
      ...initialState,
      movies: {
        ...initialState.movies,
        1: { id: 1, title: 'Mock title', watchlist: false },
        2: { id: 2, title: 'Mock title', watchlist: false }
      }
    };
    expect(reducer(initialState, action)).toEqual(newState);
  });

  it('should handle TOGGLE_TO_WATCHLIST_SUCCESS', () => {
    const state = {
      ...initialState,
      movies: {
        ...initialState.movies,
        1: { id: 1, title: 'Mock title', watchlist: false },
        2: { id: 2, title: 'Mock title', watchlist: false }
      }
    };
    const action = {
      type: TOGGLE_TO_WATCHLIST_SUCCESS,
      id: 1,
      isMovieInWatchlist: true
    };
    const newState = {
      ...state,
      movies: {
        ...state.movies,
        1: {
          ...state.movies[1],
          watchlist: true
        }
      }
    };
    expect(reducer(state, action)).toEqual(newState);
  });
  it('should handle TOGGLE_TO_FAVORITES_SUCCESS', () => {
    const state = {
      ...initialState,
      movies: {
        ...initialState.movies,
        1: { id: 1, title: 'Mock title', favorite: false },
        2: { id: 2, title: 'Mock title', favorite: false }
      }
    };
    const action = {
      type: TOGGLE_TO_FAVORITES_SUCCESS,
      id: 1,
      isMovieInFavorites: true
    };
    const newState = {
      ...state,
      movies: {
        ...state.movies,
        1: {
          ...state.movies[1],
          favorite: true
        }
      }
    };
    expect(reducer(state, action)).toEqual(newState);
  });
});
