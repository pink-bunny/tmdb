import {
  isDashboardMoviesLoading,
  dashboardMoviesList,
  dashboardMoviesTotalPages,
  dashboardMoviesCurrentPage,
  dashboardMoviesError,
  dashboardMoviesSearchQuery
} from '../selectors';

describe('Dashboard selectors.', () => {
  const loading = false;
  const error = 'Mock error';
  const totalItems = 21;
  const currentPage = 2;
  const searchQuery = 'Mock query';
  const state = {
    dashboard: {
      loading,
      error,
      ids: [1, 2],
      totalItems,
      currentPage,
      searchQuery
    },
    data: {
      movies: {
        1: { id: 1, title: 'First mock title' },
        2: { id: 2, title: 'Second mock title' }
      }
    }
  };

  it('isDashboardMoviesLoading() returns loading status', () => {
    expect(isDashboardMoviesLoading(state)).toEqual(loading);
  });

  describe('dashboardMoviesList()', () => {
    it('returns movies array', () => {
      const expectedResult = [
        { id: 1, title: 'First mock title' },
        { id: 2, title: 'Second mock title' }
      ];
      expect(dashboardMoviesList(state)).toEqual(expectedResult);
    });

    it('does not have movies and returns null', () => {
      const emptyMoviesState = {
        dashboard: { ids: [] },
        data: { movies: {} }
      };
      expect(dashboardMoviesList(emptyMoviesState)).toEqual(null);
    });
  });

  it('dashboardMoviesTotalPages() returns totalItems equals 21', () => {
    expect(dashboardMoviesTotalPages(state)).toEqual(totalItems);
  });

  it('dashboardMoviesCurrentPage() returns currentPage equals 2', () => {
    expect(dashboardMoviesCurrentPage(state)).toEqual(currentPage);
  });

  it('dashboardMoviesError() returns error', () => {
    expect(dashboardMoviesError(state)).toEqual(error);
  });

  it('dashboardMoviesSearchQuery() returns error', () => {
    expect(dashboardMoviesSearchQuery(state)).toEqual(searchQuery);
  });
});
