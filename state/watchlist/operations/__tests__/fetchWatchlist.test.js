import fetchWatchlistLogic from '../fetchWatchlist';
import { FETCH_WATCHLIST } from '../../types';
import mockHttpClient from '../../../../utils/testsHelpers/mockHttpClient';
import normalizedMovies from '../../../../utils/normalize/movies';
import { getSessionId } from '../../../session/selectors';
import { mergeMoviesList } from '../../../data/actions';
import { fetchWatchlistSuccess, fetchWatchlistError } from '../../actions';
import {
  fetchWatchlistResponseSuccess,
  fetchWatchlistResponseError
} from '../__mocks__/fetchWatchlist';

jest.mock('../../../session/selectors', () => ({
  getSessionId: jest.fn(() => '1q2w3e4r5t')
}));
jest.mock('../../../data/actions', () => ({
  mergeMoviesList: jest.fn()
}));
jest.mock('../../actions', () => ({
  fetchWatchlistSuccess: jest.fn(),
  fetchWatchlistError: jest.fn()
}));

describe('fetchWatchlist logic', () => {
  const done = jest.fn();
  const dispatch = jest.fn();
  const getState = jest.fn();
  const state = getState();
  const sessionId = getSessionId(state);
  const action = {
    type: FETCH_WATCHLIST,
    page: 1
  };
  const { page } = action;
  const currentPage = page;
  let httpClient;
  httpClient = mockHttpClient({ method: 'get', response: fetchWatchlistResponseSuccess });
  fetchWatchlistLogic.process({ getState, httpClient, action }, dispatch, done);

  it('matches snapshot', () => {
    expect(fetchWatchlistLogic).toMatchSnapshot();
  });

  it('called with right arguments', () => {
    const requestPath = `/account/{account_id}/watchlist/movies?session_id=${sessionId}&page=${page}`;
    expect(httpClient.get).toHaveBeenCalledWith(requestPath);
  });

  describe('success.', () => {
    const { data } = fetchWatchlistResponseSuccess;
    const { movies, ids, totalItems } = normalizedMovies(data);

    it('Dispatch mergeMoviesList() with movies', () => {
      expect(mergeMoviesList).toHaveBeenCalledWith(movies);
    });
    it('Dispatch fetchWatchlistSuccess() with arguments', () => {
      expect(fetchWatchlistSuccess).toHaveBeenCalledWith(ids, totalItems, currentPage);
    });
  });

  describe('failure.', () => {
    httpClient = mockHttpClient({ method: 'get', response: fetchWatchlistResponseError, reject: true });
    fetchWatchlistLogic.process({ getState, httpClient, action }, dispatch, done);
    const error = fetchWatchlistResponseError;
    const errorMessage = error.response.data.status_message;

    it('Dispatch fetchWatchlistError() with error message', () => {
      expect(fetchWatchlistError).toHaveBeenCalledWith(errorMessage);
    });
  });

  it('have been called done()', () => {
    expect(done).toHaveBeenCalled();
  });
});
