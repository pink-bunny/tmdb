import fetchFavoritesLogic from '../fetchFavorites';
import mockHttpClient from '../../../../utils/testsHelpers/mockHttpClient';
import { FETCH_FAVORITES } from '../../types';
import { getSessionId } from '../../../session/selectors';
import normalizedMovies from '../../../../utils/normalize/movies';
import {
  fetchFavoritesResponseSuccess,
  fetchFavoritesResponseError
} from '../__mocks__/fetchFavorites';
import { mergeMoviesList } from '../../../data/actions';
import { fetchFavoritesSuccess, fetchFavoritesError } from '../../actions';

jest.mock('../../../data/actions', () => ({
  mergeMoviesList: jest.fn()
}));
jest.mock('../../actions', () => ({
  fetchFavoritesSuccess: jest.fn(),
  fetchFavoritesError: jest.fn()
}));
jest.mock('../../../session/selectors', () => ({
  getSessionId: jest.fn(() => '1q2w3e4r5t')
}));

describe('fetchFavoritesLogic logic', () => {
  const done = jest.fn();
  const dispatch = jest.fn();
  const getState = jest.fn();
  const state = getState();
  const sessionId = getSessionId(state);
  const action = {
    type: FETCH_FAVORITES,
    page: 1
  };
  const { page } = action;
  const currentPage = page;
  let httpClient;
  httpClient = mockHttpClient({ method: 'get', response: fetchFavoritesResponseSuccess });
  fetchFavoritesLogic.process({ getState, httpClient, action }, dispatch, done);

  it('matches snapshot', () => {
    expect(fetchFavoritesLogic).toMatchSnapshot();
  });

  it('called with right arguments', () => {
    const requestUrl = `/account/{account_id}/favorite/movies?session_id=${sessionId}&page=${page}`;
    expect(httpClient.get).toHaveBeenCalledWith(requestUrl);
  });

  describe('success.', () => {
    const { data } = fetchFavoritesResponseSuccess;
    const { movies, ids, totalItems } = normalizedMovies(data);

    it('Dispatch mergeMoviesList() with movies', () => {
      expect(mergeMoviesList).toHaveBeenCalledWith(movies);
    });
    it('Dispatch fetchFavoritesSuccess() with arguments', () => {
      expect(fetchFavoritesSuccess).toHaveBeenCalledWith(ids, totalItems, currentPage);
    });
  });

  describe('failure.', () => {
    httpClient = mockHttpClient({ method: 'get', response: fetchFavoritesResponseError, reject: true });
    fetchFavoritesLogic.process({ getState, httpClient, action }, dispatch, done);
    const error = fetchFavoritesResponseError;
    const errorMessage = error.response.data.status_message;

    it('Dispatch fetchFavoritesError() with error message', () => {
      expect(fetchFavoritesError).toHaveBeenCalledWith(errorMessage);
    });
  });

  it('have been called done()', () => {
    expect(done).toHaveBeenCalled();
  });
});
