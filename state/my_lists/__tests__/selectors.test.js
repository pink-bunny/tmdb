import {
  isMyListsLoading,
  myListsList,
  myListsListError,
  myListsDeleteListError as deleteMyListErrorSelector
} from '../selectors';

describe('Movie selectors.', () => {
  const error = 'Mock error';
  const deleteMyListError = 'Mock error';
  const state = {
    myLists: {
      loading: false,
      error,
      ids: [1, 2],
      deleteMyListError
    },
    data: {
      lists: {
        1: { id: 1, title: 'First mock title' },
        2: { id: 2, title: 'Second mock title' }
      }
    }
  };

  it('isMyListsLoading() returns loading status', () => {
    expect(isMyListsLoading(state)).toBeFalsy();
  });

  describe('myListsList()', () => {
    it('returns lists array', () => {
      const expectedResult = [
        { id: 1, title: 'First mock title' },
        { id: 2, title: 'Second mock title' }
      ];
      expect(myListsList(state)).toEqual(expectedResult);
    });

    it('does not have movies and returns null', () => {
      const emptyListsState = {
        myLists: { ids: [] },
        data: { lists: {} }
      };
      expect(myListsList(emptyListsState)).toBeNull();
    });
  });

  it('myListsListError() returns error', () => {
    expect(myListsListError(state)).toEqual(error);
  });

  it('deleteMyListError() returns error', () => {
    expect(deleteMyListErrorSelector(state)).toEqual(deleteMyListError);
  });
});
