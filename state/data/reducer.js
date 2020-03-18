import * as types from './types';
import { TOGGLE_TO_WATCHLIST_SUCCESS } from '../watchlist/types';
import { TOGGLE_TO_FAVORITES_SUCCESS } from '../favorites/types';

const initialState = {
  movies: {},
  lists: {},
  movie: {}
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case types.MERGE_MOVIES_LIST:
      return {
        ...state,
        movies: {
          ...state.movies,
          ...action.movies
        }
      };
    case types.MERGE_LISTS_LIST:
      return {
        ...state,
        lists: action.lists
      };
    case TOGGLE_TO_WATCHLIST_SUCCESS:
      return {
        ...state,
        movies: {
          ...state.movies,
          [action.id]: {
            ...state.movies[action.id],
            watchlist: action.isMovieInWatchlist
          }
        }
      };
    case TOGGLE_TO_FAVORITES_SUCCESS:
      return {
        ...state,
        movies: {
          ...state.movies,
          [action.id]: {
            ...state.movies[action.id],
            favorite: action.isMovieInFavorites
          }
        }
      };
    default:
      return state;
  }
};

export default data;
