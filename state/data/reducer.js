import * as types from './types';

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
    case types.MERGE_MOVIES:
      return {
        ...state,
        movie: {
          ...state.movie,
          ...action.movie
        }
      };
    default:
      return state;
  }
};

export default data;
