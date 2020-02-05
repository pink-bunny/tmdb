import * as types from './types';

const initialState = {
  movies: {}
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case types.MERGE_MOVIES_LIST:
      return {
        ...state,
        movies: action.movies
      };
    default:
      return state;
  }
};

export default data;
