import * as types from './types';

const initialState = {
  trendingList: {
    loading: false,
    error: null,
    ids: [],
    totalItems: 0,
    currentPage: 0
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
          ids: action.ids,
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
