import * as types from './types';

const initialState = {
  loading: false,
  error: '',
  ids: [],
  totalItems: 0,
  currentPage: 0,
  searchQuery: ''
};

const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TRENDING_MOVIES:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        ids: action.ids,
        totalItems: action.totalItems,
        currentPage: action.currentPage
      };
    case types.FETCH_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case types.SEARCH_MOVIES:
      return {
        ...state,
        loading: true,
        searchQuery: action.searchQuery
      };
    default:
      return state;
  }
};

export default dashboard;
