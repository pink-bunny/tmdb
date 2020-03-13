import myListsLogic from '../myLists';
import { getSessionId } from '../../../session/selectors';
import mockHttpClient from '../../../../utils/testsHelpers/mockHttpClient';
import normalizeMyLists from '../../../../utils/normalize/myLists';
import { mergeListsList } from '../../../data/actions';
import {
  myListsResponseSuccess,
  myListsResponseError
} from '../__mocks__/myLists';
import {
  fetchMyListsSuccess,
  fetchMyListsError
} from '../../actions';

jest.mock('../../../data/actions', () => ({
  mergeListsList: jest.fn()
}));
jest.mock('../../actions', () => ({
  fetchMyListsSuccess: jest.fn(),
  fetchMyListsError: jest.fn()
}));

describe('myLists logic', () => {
  const dispatch = jest.fn();
  const getState = jest.fn(() => ({ session: { sessionId: '1q2w3e4r5t' } }));
  const done = jest.fn();
  const state = getState();
  const sessinId = getSessionId(state);
  let httpClient;
  httpClient = mockHttpClient({ method: 'get', response: myListsResponseSuccess });
  myListsLogic.process({ getState, httpClient }, dispatch, done);

  it('matches snapshot', () => {
    expect(myListsLogic).toMatchSnapshot();
  });

  it('called with right arguments', () => {
    const requestUrl = `/account/{account_id}/lists?session_id=${sessinId}`;
    expect(httpClient.get).toHaveBeenCalledWith(requestUrl);
  });

  describe('success.', () => {
    const { data } = myListsResponseSuccess;
    const { lists, ids } = normalizeMyLists(data);
    it('Dispatch mergeListsList() with lists', () => {
      expect(mergeListsList).toHaveBeenCalledWith(lists);
    });
    it('Dispatch fetchMyListsSuccess() with ids', () => {
      expect(fetchMyListsSuccess).toHaveBeenCalledWith(ids);
    });
  });

  describe('failure.', () => {
    httpClient = mockHttpClient({ method: 'get', response: myListsResponseError, reject: true });
    myListsLogic.process({ getState, httpClient }, dispatch, done);
    const error = myListsResponseError;
    const errorMessage = error.response.data.status_message;
    it('Dispatch fetchMyListsError() with error message', () => {
      expect(fetchMyListsError).toHaveBeenCalledWith(errorMessage);
    });
  });

  it('have been called done()', () => {
    expect(done).toHaveBeenCalled();
  });
});
