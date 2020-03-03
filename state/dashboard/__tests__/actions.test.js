import * as types from '../types';
import {
  fetchTrendingMovies,
  fetchMoviesSuccess,
  fetchMoviesError,
  searchMovies
} from '../actions';

describe('Dashboard actions.', () => {
  describe('Fetch trending movies', () => {
    it('first(default) page', () => {
      const expectedAction = {
        type: types.FETCH_TRENDING_MOVIES,
        page: 1
      };

      expect(fetchTrendingMovies()).toEqual(expectedAction);
    });

    it('third page', () => {
      const page = 3;
      const expectedAction = {
        type: types.FETCH_TRENDING_MOVIES,
        page
      };

      expect(fetchTrendingMovies(page)).toEqual(expectedAction);
    });
  });

  describe('Fetch movies success', () => {
    const ids = [1, 2, 3];
    const totalItems = 21;
    const currentPage = 2;
    const expectedAction = {
      type: types.FETCH_MOVIES_SUCCESS,
      ids,
      totalItems,
      currentPage
    };

    expect(fetchMoviesSuccess(ids, totalItems, currentPage)).toEqual(expectedAction);
  });

  describe('Fetch movies error', () => {
    const error = 'Mock error';
    const expectedAction = {
      type: types.FETCH_MOVIES_ERROR,
      error
    };

    expect(fetchMoviesError(error)).toEqual(expectedAction);
  });

  describe('Search movies', () => {
    const search = 'Mock query';

    it('first(default) page', () => {
      const expectedAction = {
        type: types.SEARCH_MOVIES,
        searchQuery: search,
        page: 1
      };

      expect(searchMovies(search)).toEqual(expectedAction);
    });

    it('second page', () => {
      const page = 2;
      const expectedAction = {
        type: types.SEARCH_MOVIES,
        searchQuery: search,
        page
      };

      expect(searchMovies(search, page)).toEqual(expectedAction);
    });
  });
});
