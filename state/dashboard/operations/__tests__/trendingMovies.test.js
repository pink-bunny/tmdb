import trendingMovies from '../trendingMovies';
import * as types from '../../types';
import mockHttpClient from '../../../../utils/testsHelpers/mockHttpClient';
import { moviesResponseSuccess, trendingMoviesResponseError } from '../__mocks__/trendingMovies';
import normalizedMovies from '../../../../utils/normalize/movies';
import { fetchMoviesSuccess, fetchMoviesError } from '../../actions';
import { mergeMoviesList } from '../../../data/actions';

jest.mock('../../../data/actions', () => ({
  mergeMoviesList: jest.fn()
}));
jest.mock('../../actions', () => ({
  fetchMoviesSuccess: jest.fn(),
  fetchMoviesError: jest.fn()
}));

describe('trendingMovies logic', () => {
  const action = {
    type: types.FETCH_TRENDING_MOVIES,
    page: 1
  };
  const dispatch = jest.fn();
  const done = jest.fn();
  const { page } = action;
  const currentPage = page;
  let httpClient;
  httpClient = mockHttpClient({ method: 'get', response: moviesResponseSuccess });
  trendingMovies.process({ httpClient, action }, dispatch, done);

  it('matches snapshot', () => {
    expect(trendingMovies).toMatchSnapshot();
  });

  it('httpClient called with right arguments', () => {
    const requestUrl = `trending/movie/day?page=${page}`;
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
    httpClient = mockHttpClient({ method: 'get', response: trendingMoviesResponseError, reject: true });
    trendingMovies.process({ httpClient, action }, dispatch, done);

    it('dispatch fetchMoviesError() with error', () => {
      const error = trendingMoviesResponseError;
      const errorMessage = error.response.data.status_message;
      expect(fetchMoviesError).toHaveBeenCalledWith(errorMessage);
    });
  });

  it('done() have been called', () => {
    expect(done).toHaveBeenCalled();
  });
});
