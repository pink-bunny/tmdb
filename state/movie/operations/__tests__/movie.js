import movieLogic from '../movie';
import { FETCH_MOVIE } from '../../types';
import { mockMultiHttpClient } from '../../../../utils/testsHelpers/mockHttpClient';
import { getSessionId } from '../../../session/selectors';
import normalizeMovie from '../normalize/movie';
import { mergeMoviesList } from '../../../data/actions';
import { fetchMovieSuccess, fetchMovieError } from '../../actions';
import {
  movieInfoResponseSuccess,
  movieInfoResponseError,
  movieImagesResponseSuccess,
  movieCreditsResponseSuccess,
  movieStatesResponseSuccess
} from '../__mocks__/movie';

jest.mock('../../../data/actions', () => ({
  mergeMoviesList: jest.fn()
}));
jest.mock('../../actions', () => ({
  fetchMovieSuccess: jest.fn(),
  fetchMovieError: jest.fn()
}));

describe('Movie logic', () => {
  const action = {
    type: FETCH_MOVIE,
    id: 1
  };
  const dispatch = jest.fn();
  const done = jest.fn();
  const getState = jest.fn(() => ({ session: { sessionId: '1q2w3e4r5t' } }));
  const state = getState();
  const sessionId = getSessionId(state);
  const { id } = action;
  let httpClient;
  httpClient = mockMultiHttpClient([
    { method: 'get', response: movieInfoResponseSuccess },
    { method: 'get', response: movieImagesResponseSuccess },
    { method: 'get', response: movieCreditsResponseSuccess },
    { method: 'get', response: movieStatesResponseSuccess }
  ]);
  movieLogic.process({ getState, httpClient, action }, dispatch, done);

  it('matches snapshot', () => {
    expect(movieLogic).toMatchSnapshot();
  });

  describe('httpClients', () => {
    const requestInfo = `movie/${id}`;
    const requestImages = `movie/${id}/images`;
    const requestCredits = `movie/${id}/credits`;
    const requestStates = `movie/${id}/account_states?session_id=${sessionId}`;

    it('called with right arguments', () => {
      expect(httpClient.get).toHaveBeenNthCalledWith(1, requestInfo);
      expect(httpClient.get).toHaveBeenNthCalledWith(2, requestImages);
      expect(httpClient.get).toHaveBeenNthCalledWith(3, requestCredits);
      expect(httpClient.get).toHaveBeenNthCalledWith(4, requestStates);
    });
  });

  describe('success.', () => {
    const { data: movieInfo } = movieInfoResponseSuccess;
    const { data: movieImages } = movieImagesResponseSuccess;
    const { data: movieCredits } = movieCreditsResponseSuccess;
    const { data: movieStates } = movieStatesResponseSuccess;
    const data = {
      ...movieInfo,
      ...movieImages,
      ...movieCredits,
      ...movieStates
    };
    const { movie } = normalizeMovie(data);
    it('Dispatch mergeMoviesList() with movie', () => {
      expect(mergeMoviesList).toHaveBeenCalledWith(movie);
    });
    it('Dispatch fetchMovieSuccess() with id', () => {
      expect(fetchMovieSuccess).toHaveBeenCalledWith(id);
    });
  });

  describe('failure.', () => {
    beforeEach(() => {
      httpClient = mockMultiHttpClient([
        { method: 'get', response: movieInfoResponseError, reject: true },
        { method: 'get', response: movieImagesResponseSuccess },
        { method: 'get', response: movieCreditsResponseSuccess },
        { method: 'get', response: movieStatesResponseSuccess }
      ]);
      movieLogic.process({ getState, httpClient, action }, dispatch, done);
    });

    it('Dispatch fetchMovieError() with error', () => {
      const error = movieInfoResponseError;
      const errorMessage = error.response.data.status_message;
      expect(fetchMovieError).toHaveBeenCalledWith(errorMessage);
    });
  });

  it('have been called done()', () => {
    expect(done).toHaveBeenCalled();
  });
});
