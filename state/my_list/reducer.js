import * as types from './types';

const initialState = {
  loading: false,
  error: ''
};

const myList = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_MY_LIST:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_MY_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        movieId: action.movieId,
        moviesIds: action.moviesIds
      };
    case types.FETCH_MY_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default myList;
