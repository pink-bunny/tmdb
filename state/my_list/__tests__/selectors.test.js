import {
  isMyListLoading,
  myListError,
  myListInfo,
  myListMovies
} from '../selectors';

describe('My list selectors.', () => {
  it('isMyListLoading() returned true', () => {
    const state = { myList: { loading: true } };
    expect(isMyListLoading(state)).toBeTruthy();
  });

  it('myListError() returned error', () => {
    const error = 'Mock error';
    const state = { myList: { error } };
    expect(myListError(state)).toEqual(error);
  });

  describe('myListInfo()', () => {
    it('returned my list info object', () => {
      const id = 1;
      const state = {
        myList: { id },
        data: {
          lists: {
            1: { id: 1, name: 'Mock list' }
          }
        }
      };
      const expectedResult = { id: 1, name: 'Mock list' };
      expect(myListInfo(state)).toEqual(expectedResult);
    });

    it('did not extract id from the state and returned null', () => {
      const state = {
        myList: {},
        data: {}
      };
      expect(myListInfo(state)).toBeNull();
    });
  });

  describe('myListMovies()', () => {
    it('returned movies list', () => {
      const id = 1;
      const state = {
        myList: { id },
        data: {
          lists: {
            1: { id: 1, name: 'Mock list', items: [1, 2] }
          },
          movies: { 1: { id: 1, title: 'Mock ttile' }, 2: { id: 2, title: 'Mock ttile' } }
        }
      };
      const expectedResult = [
        { id: 1, title: 'Mock ttile' }, { id: 2, title: 'Mock ttile' }
      ];
      expect(myListMovies(state)).toEqual(expectedResult);
    });

    it('did not receive list id and returned null', () => {
      const state = {
        myList: {},
        data: { lists: { 1: { id: 1, name: 'Mock list', items: [] } } }
      };
      expect(myListMovies(state)).toBeNull();
    });

    it('received an empty movies array and returned null', () => {
      const id = 1;
      const state = {
        myList: { id },
        data: { lists: { 1: { id: 1, name: 'Mock list', items: [] } } }
      };
      expect(myListMovies(state)).toBeNull();
    });
  });
});
