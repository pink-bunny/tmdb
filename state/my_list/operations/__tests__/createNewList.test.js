import createNewListLogic from '../createNewList';
import { CREATE_MY_LIST } from '../../types';
import mockHttpClient from '../../../../utils/testsHelpers/mockHttpClient';
import { getSessionId } from '../../../session/selectors';
import { fetchMyLists } from '../../../my_lists/actions';
import createNewListResponseError from '../__mocks__/createNewList';

jest.mock('../../../my_lists/actions', () => ({
  fetchMyLists: jest.fn()
}));

describe('createNewList logic', () => {
  const name = 'Mock list';
  const description = 'Mock description';
  const hideModal = jest.fn();
  const setErrors = jest.fn();
  const action = {
    type: CREATE_MY_LIST,
    name,
    description,
    setErrors,
    hideModal
  };
  const dispatch = jest.fn();
  const done = jest.fn();
  const getState = jest.fn(() => ({ session: { sessionId: '1q2w3e4r5t' } }));
  const state = getState();
  const sessionId = getSessionId(state);
  let httpClient;
  httpClient = mockHttpClient({ method: 'post' });
  createNewListLogic.process({ getState, httpClient, action }, dispatch, done);

  it('matches snapshot', () => {
    expect(createNewListLogic).toMatchSnapshot();
  });

  describe('called with right arguments', () => {
    const requestUrl = `/list?session_id=${sessionId}`;
    const requestBody = {
      name,
      description
    };
    expect(httpClient.post).toHaveBeenCalledWith(requestUrl, requestBody);
  });

  describe('success.', () => {
    it('hideModal to have been called', () => {
      expect(hideModal).toHaveBeenCalled();
    });

    it('Dispatch fetchMyLists()', () => {
      expect(fetchMyLists).toHaveBeenCalled();
    });
  });

  describe('failure.', () => {
    httpClient = mockHttpClient({ method: 'post', response: createNewListResponseError, reject: true });
    createNewListLogic.process({ getState, httpClient, action }, dispatch, done);

    it('Sets error', () => {
      const error = createNewListResponseError;
      const createNewListError = error.response.data.status_message;
      expect(setErrors).toHaveBeenCalledWith({ serverError: createNewListError });
    });
  });

  it('done() have been called', () => {
    expect(done).toHaveBeenCalled();
  });
});
