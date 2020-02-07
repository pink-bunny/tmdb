import * as types from './types';

const initialState = {
  loading: false,
  error: '',
  ids: []
};

const myLists = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_MY_LISTS:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_MY_LISTS_SUCCESS:
      return {
        ...state,
        loading: false,
        ids: action.ids
      };
    case types.FETCH_MY_LISTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default myLists;
