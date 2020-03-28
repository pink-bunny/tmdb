import myListLogic from '../myList';
import mockHttpClient from '../../../../utils/testsHelpers/mockHttpClient';
import { getSessionId } from '../../../session/selectors';
import normalizeMyList from '../../../../utils/normalize/myList';
import { FETCH_MY_LIST } from '../../types';
import { fetchMyListSuccess, fetchMyListError } from '../../actions';
import { mergeListsList, mergeMoviesList } from '../../../data/actions';
import {
  myListResponseSuccess,
  myListResponseError
} from '../__mocks__/myList';

jest.mock('../../actions', () => ({
  fetchMyListSuccess: jest.fn(),
  fetchMyListError: jest.fn()
}));
jest.mock('../../../data/actions', () => ({
  mergeListsList: jest.fn(),
  mergeMoviesList: jest.fn()
}));

describe('myList logic', () => {
  const dispatch = jest.fn();
  const done = jest.fn();
  const getState = jest.fn(() => ({ session: { sessionId: '1q2w3e4r5t' } }));
  const state = getState();
  const sessionId = getSessionId(state);
  const action = {
    type: FETCH_MY_LIST,
    id: 1
  };
  const { id } = action;
  let httpClient;
  httpClient = mockHttpClient({ method: 'get', response: myListResponseSuccess });
  myListLogic.process({ getState, httpClient, action }, dispatch, done);

  it('matches snapshot', () => {
    expect(myListLogic).toMatchSnapshot();
  });

  it('called with right arguments', () => {
    const requestUrl = `/list/${id}?session_id=${sessionId}`;
    expect(httpClient.get).toHaveBeenCalledWith(requestUrl);
  });

  describe('success.', () => {
    const { data } = myListResponseSuccess;
    const { lists, movies } = normalizeMyList(data);

    it('Dispatch mergeListsList() with lists', () => {
      expect(mergeListsList).toHaveBeenCalledWith(lists);
    });
    it('Dispatch mergeMoviesList() with movies', () => {
      expect(mergeMoviesList).toHaveBeenCalledWith(movies);
    });
    it('Dispatch fetchMyListSuccess() with id', () => {
      expect(fetchMyListSuccess).toHaveBeenCalledWith(id);
    });
  });

  describe('failure.', () => {
    httpClient = mockHttpClient({ method: 'get', response: myListResponseError, reject: true });
    myListLogic.process({ getState, httpClient, action }, dispatch, done);
    const error = myListResponseError;
    const errorMessage = error.response.data.status_message;

    it('Dispatch fetchMyListError() with error message', () => {
      expect(fetchMyListError).toHaveBeenCalledWith(errorMessage);
    });
  });

  it('have been called done()', () => {
    expect(done).toHaveBeenCalled();
  });
});
