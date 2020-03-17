import * as types from './types';

const initialState = {
  loading: false,
  error: '',
  totalItems: 0,
  currentPage: 0
};

const favorites = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_FAVORITES:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_FAVORITES_SUCCESS:
      return {
        ...state,
        loading: false,
        ids: action.ids,
        totalItems: action.totalItems,
        currentPage: action.currentPage
      };
    case types.FETCH_FAVORITES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default favorites;
