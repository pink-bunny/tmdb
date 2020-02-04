import * as types from './types';

const initialState = {
  trendingList: {
    loading: false,
    error: null,
    list: [],
    totalItems: null,
    currentPage: null
  }
};

const trendingMovies = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TRANDING_MOVIES:
      return {
        ...state,
        trendingList: {
          ...state.trendingList,
          loading: true
        }
      };
    case types.FETCH_TRANDING_MOVIES_SUCCESS:
      return {
        ...state,
        trendingList: {
          ...state.trendingList,
          loading: false,
          list: action.list,
          totalItems: action.totalItems,
          currentPage: action.currentPage
        }
      };
    case types.FETCH_TRANDING_MOVIES_ERROR:
      return {
        ...state,
        trendingList: {
          ...state.trendingList,
          loading: false,
          error: action.error
        }
      };
    default:
      return state;
  }
};

export default trendingMovies;
