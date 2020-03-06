import * as types from './types';

const initialState = {
  loading: false
};

const watchlist = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_WATCHLIST:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_WATCHLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        ids: action.ids,
        totalItems: action.totalItems,
        currentPage: action.currentPage
      };
    case types.FETCH_WATCHLIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default watchlist;
