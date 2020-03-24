import * as types from '../types';
import {
  fetchMyLists,
  fetchMyListsSuccess,
  fetchMyListsError,
  createMyList,
  deleteMyList,
  deleteMyListError,
  toggleToList,
  createAndAddToList
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

  it('Toggle to list', () => {
    const listId = 123;
    const movieId = 321;
    const expectedAction = {
      type: types.TOGGLE_TO_LIST,
      listId,
      movieId
    };
    expect(toggleToList(listId, movieId)).toEqual(expectedAction);
  });

  it('Create and add to list', () => {
    const name = 'Mock list name';
    const description = 'Mock list description';
    const setErrors = jest.fn();
    const hideModal = jest.fn();
    const movieId = 321;
    const expectedAction = {
      type: types.CREATE_AND_ADD_TO_LIST,
      name,
      description,
      setErrors,
      hideModal,
      movieId
    };
    expect(createAndAddToList({ name, description }, setErrors, hideModal, movieId))
      .toEqual(expectedAction);
  });
});
