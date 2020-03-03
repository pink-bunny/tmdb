import * as types from '../types';
import {
  fetchMyLists,
  fetchMyListsSuccess,
  fetchMyListsError,
  createMyList,
  deleteMyList,
  deleteMyListError
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

  it('Create my list', () => {
    const name = 'Mock name';
    const description = 'Mock description';
    const setErrors = jest.fn();
    const hideModal = jest.fn();
    const expectedAction = {
      type: types.CREATE_MY_LIST,
      name,
      description,
      setErrors,
      hideModal
    };
    expect(createMyList({ name, description }, setErrors, hideModal)).toEqual(expectedAction);
  });

  it('Delete my list', () => {
    const id = 1;
    const expectedAction = {
      type: types.DELETE_MY_LIST,
      id
    };
    expect(deleteMyList(id)).toEqual(expectedAction);
  });

  it('Delete my list error', () => {
    const error = 'Mock error';
    const hideModal = jest.fn();
    const expectedAction = {
      type: types.DELETE_MY_LIST_ERROR,
      error,
      hideModal
    };
    expect(deleteMyListError(error, hideModal)).toEqual(expectedAction);
  });
});
