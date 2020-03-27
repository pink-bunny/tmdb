import * as types from '../types';
import {
  fetchMyList,
  fetchMyListSuccess,
  fetchMyListError,
  createMyList,
  deleteMyList,
  deleteMyListError,
  addToList,
  createAndAddToList,
  removeFromList,
  clearListIdFromState
} from '../actions';

describe('My list actions.', () => {
  it('Fetch my list', () => {
    const id = 1;
    const expectedAction = {
      type: types.FETCH_MY_LIST,
      id
    };
    expect(fetchMyList(id)).toEqual(expectedAction);
  });

  it('Success fetching my list', () => {
    const id = 1;
    const expectedAction = {
      type: types.FETCH_MY_LIST_SUCCESS,
      id
    };
    expect(fetchMyListSuccess(id)).toEqual(expectedAction);
  });

  it('Fetching my list is failed', () => {
    const error = 1;
    const expectedAction = {
      type: types.FETCH_MY_LIST_ERROR,
      error
    };
    expect(fetchMyListError(error)).toEqual(expectedAction);
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

  it('Add to list', () => {
    const listId = 123;
    const movieId = 321;
    const expectedAction = {
      type: types.ADD_TO_LIST,
      listId,
      movieId
    };
    expect(addToList(listId, movieId)).toEqual(expectedAction);
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

  it('Remove from list', () => {
    const listId = 123;
    const movieId = 321;
    const expectedAction = {
      type: types.REMOVE_FROM_LIST,
      listId,
      movieId
    };
    expect(removeFromList(listId, movieId)).toEqual(expectedAction);
  });

  it('Clear list id from state', () => {
    const expectedAction = {
      type: types.CLEAR_LIST_ID_FROM_STATE
    };
    expect(clearListIdFromState()).toEqual(expectedAction);
  });
});
