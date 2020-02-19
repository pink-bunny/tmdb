import * as types from './types';

const initialState = {
  loading: false
};

const movie = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_MOVIE:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        id: action.id
      };
    case types.FETCH_MOVIE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default movie;
