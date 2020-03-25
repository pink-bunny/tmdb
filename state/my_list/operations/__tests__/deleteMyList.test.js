import deleteMyListLogic from '../deleteMyList';
import { DELETE_MY_LIST } from '../../types';
import mockHttpClient from '../../../../utils/testsHelpers/mockHttpClient';
import { getSessionId } from '../../../session/selectors';
import { fetchMyLists } from '../../../my_lists/actions';
import { deleteMyListError } from '../../actions';
import deleteMyListResponseError from '../__mocks__/deleteMyList';

jest.mock('../../actions', () => ({
  deleteMyListError: jest.fn()
}));
jest.mock('../../../my_lists/actions', () => ({
  fetchMyLists: jest.fn()
}));

describe('deleteMyList logic', () => {
  const hideModal = jest.fn();
  const action = {
    type: DELETE_MY_LIST,
    id: 1,
    hideModal
  };
  const { id } = action;
  const dispatch = jest.fn();
  const done = jest.fn();
  const getState = jest.fn(() => ({ session: { sessionId: '1q2w3e4r5t' } }));
  const state = getState();
  const sessionId = getSessionId(state);
  let httpClient;
  httpClient = mockHttpClient({ method: 'delete' });
  deleteMyListLogic.process({ getState, httpClient, action }, dispatch, done);

  it('matches snapshot', () => {
    expect(deleteMyListLogic).toMatchSnapshot();
  });

  it('called with right arguments', () => {
    const requestPath = `list/${id}?session_id=${sessionId}`;
    expect(httpClient.delete).toHaveBeenCalledWith(requestPath);
  });

  describe('success.', () => {
    it('Dispatch fetchMyLists()', () => {
      expect(fetchMyLists).toHaveBeenCalled();
    });
    it('Hide modal', () => {
      expect(hideModal).toHaveBeenCalled();
    });
  });

  describe('failure.', () => {
    httpClient = mockHttpClient({ method: 'delete', response: deleteMyListResponseError, reject: true });
    deleteMyListLogic.process({ getState, httpClient, action }, dispatch, done);

    it('Dispatch deleteMyListError() with error', () => {
      const error = deleteMyListResponseError;
      const errorMessage = error.response.data.status_message;
      expect(deleteMyListError).toHaveBeenCalledWith(errorMessage);
    });
    it('Dispatch fetchMyLists()', () => {
      expect(fetchMyLists).toHaveBeenCalled();
    });
  });

  it('done() have been called', () => {
    expect(done).toHaveBeenCalled();
  });
});
