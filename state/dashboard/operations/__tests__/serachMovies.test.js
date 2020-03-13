import searchMovies from '../searchMovies';
import { SEARCH_MOVIES } from '../../types';
import mockHttpClient from '../../../../utils/testsHelpers/mockHttpClient';
import { moviesResponseSuccess, searchMoviesResponseError } from '../__mocks__/trendingMovies';
import normalizedMovies from '../../../../utils/normalize/movies';
import { mergeMoviesList } from '../../../data/actions';
import {
  fetchMoviesSuccess,
  fetchMoviesError
} from '../../actions';

jest.mock('../../../data/actions', () => ({
  mergeMoviesList: jest.fn()
}));
jest.mock('../../actions', () => ({
  fetchMoviesSuccess: jest.fn(),
  fetchMoviesError: jest.fn()
}));

describe('searchMovies logic', () => {
  const action = {
    type: SEARCH_MOVIES,
    page: 1,
    searchQuery: 'query'
  };
  const dispatch = jest.fn();
  const done = jest.fn();
  const { searchQuery, page } = action;
  const currentPage = page;
  let httpClient;
  httpClient = mockHttpClient({ method: 'get', response: moviesResponseSuccess });
  searchMovies.process({ httpClient, action }, dispatch, done);

  it('matches snapshot', () => {
    expect(searchMovies).toMatchSnapshot();
  });

  it('httpClient called with right arguments', () => {
    const requestUrl = `search/movie?query=${searchQuery}&page=${page}`;
    expect(httpClient.get).toHaveBeenCalledWith(requestUrl);
  });

  describe('success', () => {
    const { data } = moviesResponseSuccess;
    const { movies, ids, totalItems } = normalizedMovies(data);

    it('dispatch mergeMoviesList() with movies', () => {
      expect(mergeMoviesList).toHaveBeenCalledWith(movies);
    });
    it('dispatch fetchMoviesSuccess() with ids, totalItems, currentPage', () => {
      expect(fetchMoviesSuccess).toHaveBeenCalledWith(ids, totalItems, currentPage);
    });
  });

  describe('failure', () => {
    httpClient = mockHttpClient({ method: 'get', response: searchMoviesResponseError, reject: true });
    searchMovies.process({ httpClient, action }, dispatch, done);

    it('dispatch fetchMoviesError() with error', () => {
      const error = searchMoviesResponseError;
      const [errorMessage] = error.response.data.errors;
      expect(fetchMoviesError).toHaveBeenCalledWith(errorMessage);
    });
  });

  it('done() have been called', () => {
    expect(done).toHaveBeenCalled();
  });
});
