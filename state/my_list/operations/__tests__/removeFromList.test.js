import removeFromListLogic from '../removeFromList';
import { REMOVE_FROM_LIST } from '../../types';
import mockHttpClient from '../../../../utils/testsHelpers/mockHttpClient';
import { getSessionId } from '../../../session/selectors';
import { fetchMyList } from '../../actions';

jest.mock('../../actions', () => ({
  fetchMyList: jest.fn()
}));

describe('removeFromList logic', () => {
  const listId = 1;
  const movieId = 2;
  const done = jest.fn();
  const dispatch = jest.fn();
  const action = {
    type: REMOVE_FROM_LIST,
    listId,
    movieId
  };
  const getState = jest.fn(() => ({ session: { sessionId: '1q2w3e4r5t' } }));
  const state = getState();
  const sessionId = getSessionId(state);
  const httpClient = mockHttpClient({ method: 'post' });
  removeFromListLogic.process({ getState, httpClient, action }, dispatch, done);

  it('matches snapshot', () => {
    expect(removeFromListLogic).toMatchSnapshot();
  });

  it('called with right arguments', () => {
    const requestPath = `/list/${listId}/remove_item?session_id=${sessionId}`;
    const requestBody = {
      media_id: movieId /* eslint-disable-line camelcase */
    };
    expect(httpClient.post).toHaveBeenCalledWith(requestPath, requestBody);
  });

  describe('success.', () => {
    it('Dispatch fetchMyList() with list id', () => {
      expect(fetchMyList).toHaveBeenCalledWith(listId);
    });
  });

  it('have been called done()', () => {
    expect(done).toHaveBeenCalled();
  });
});
