import * as types from '../types';
import {
  fetchMyLists,
  fetchMyListsSuccess,
  fetchMyListsError
} from '../actions';

describe('My lists actions.', () => {
  it('Fetch my lists', () => {
    const expectedAction = {
      type: types.FETCH_MY_LISTS
    };
    expect(fetchMyLists()).toEqual(expectedAction);
  });

  it('Success fetching my lists', () => {
    const ids = [1, 2, 3];
    const expectedAction = {
      type: types.FETCH_MY_LISTS_SUCCESS,
      ids
    };
    expect(fetchMyListsSuccess(ids)).toEqual(expectedAction);
  });

  it('Fetch my lists error', () => {
    const error = 'Mock error';
    const expectedAction = {
      type: types.FETCH_MY_LISTS_ERROR,
      error
    };
    expect(fetchMyListsError(error)).toEqual(expectedAction);
  });
});
