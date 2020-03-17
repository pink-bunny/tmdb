import {
  isFavoritesLoading,
  favoritesTotalItems,
  favoritesCurrentPage,
  favoritesError,
  favoritesList
} from '../selectors';

describe('Favorites selectors', () => {
  it('returns loading status', () => {
    const state = { favorites: { loading: false } };
    expect(isFavoritesLoading(state)).toBeFalsy();
  });

  it('returns total items', () => {
    const totalItems = 3;
    const state = { favorites: { totalItems } };
    expect(favoritesTotalItems(state)).toBe(totalItems);
  });

  it('returns current page', () => {
    const currentPage = 1;
    const state = { favorites: { currentPage } };
    expect(favoritesCurrentPage(state)).toBe(currentPage);
  });

  it('returns error', () => {
    const error = 'Mock error';
    const state = { favorites: { error } };
    expect(favoritesError(state)).toBe(error);
  });

  describe('returns', () => {
    it('list with items', () => {
      const state = {
        favorites: { ids: [1, 2] },
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
      expect(favoritesList(state)).toEqual(expectedResult);
    });
    it('empty list', () => {
      const state = {
        favorites: { ids: [] },
        data: { lists: {} }
      };
      expect(favoritesList(state)).toBeNull();
    });
  });
});
