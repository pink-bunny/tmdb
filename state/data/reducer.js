import * as types from './types';

const initialState = {
  movies: {},
  lists: {}
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case types.MERGE_MOVIES_LIST:
      return {
        ...state,
        movies: action.movies
      };
    case types.MERGE_LISTS_LIST:
      return {
        ...state,
        lists: action.lists
      };
    default:
      return state;
  }
};

export default data;
