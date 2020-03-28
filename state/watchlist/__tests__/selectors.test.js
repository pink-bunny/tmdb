import {
  isWatchlistLoading,
  watchlistTotalItems,
  watchlistCurrentPage,
  watchlistError,
  watchlistList
} from '../selectors';

describe('Watchlist selectors', () => {
  it('returns loading status', () => {
    const state = { watchlist: { loading: false } };
    expect(isWatchlistLoading(state)).toBeFalsy();
  });

  it('returns total items', () => {
    const totalItems = 3;
    const state = { watchlist: { totalItems } };
    expect(watchlistTotalItems(state)).toBe(totalItems);
  });

  it('returns current page', () => {
    const currentPage = 1;
    const state = { watchlist: { currentPage } };
    expect(watchlistCurrentPage(state)).toBe(currentPage);
  });

  it('returns error', () => {
    const error = 'Mock error';
    const state = { watchlist: { error } };
    expect(watchlistError(state)).toBe(error);
  });

  describe('returns', () => {
    it('list with items', () => {
      const state = {
        watchlist: { ids: [1, 2] },
        data: {
          movies: {
            1: { id: 1, title: 'Mock title' },
            2: { id: 2, title: 'Mock title' }
          }
        }
      };
      const expectedResult = [
        { id: 1, title: 'Mock title' },
        { id: 2, title: 'Mock title' }
      ];
      expect(watchlistList(state)).toEqual(expectedResult);
    });
    it('empty list', () => {
      const state = {
        watchlist: {},
        data: { lists: {} }
      };
      expect(watchlistList(state)).toBeNull();
    });
  });
});
