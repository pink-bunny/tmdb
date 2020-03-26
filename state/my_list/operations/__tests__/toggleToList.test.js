import toggleToListLogic from '../toggleToList';
import mockHttpClient from '../../../../utils/testsHelpers/mockHttpClient';
import { getSessionId } from '../../../session/selectors';
import { TOGGLE_TO_LIST } from '../../types';

describe('toggleToList logic', () => {
  const listId = 123;
  const movieId = 123;
  const action = {
    type: TOGGLE_TO_LIST,
    listId,
    movieId
  };
  const dispatch = jest.fn();
  const done = jest.fn();
  const getState = jest.fn(() => ({ session: { sessionId: '1q2w3e4r5t' } }));
  const state = getState();
  const sessionId = getSessionId(state);
  const httpClient = mockHttpClient({ method: 'post' });
  toggleToListLogic.process({ getState, httpClient, action }, dispatch, done);

  it('matches snapshot', () => {
    expect(toggleToListLogic).toMatchSnapshot();
  });

  it('called with right arguments', () => {
    const requestUrl = `/list/${listId}/add_item?session_id=${sessionId}`;
    const requestBody = {
      media_id: movieId /* eslint-disable-line camelcase */
    };
    expect(httpClient.post).toHaveBeenCalledWith(requestUrl, requestBody);
  });

  it('have been called done()', () => {
    expect(done).toHaveBeenCalled();
  });
});
