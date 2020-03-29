import addToListLogic from '../addToList';
import mockHttpClient from '../../../../utils/testsHelpers/mockHttpClient';
import { getSessionId } from '../../../session/selectors';
import { ADD_TO_LIST } from '../../types';

describe('addToList logic', () => {
  const listId = 123;
  const movieId = 123;
  let action;
  action = {
    type: ADD_TO_LIST,
    listId,
    movieId
  };
  const dispatch = jest.fn();
  const done = jest.fn();
  const getState = jest.fn(() => ({ session: { sessionId: '1q2w3e4r5t' } }));
  const state = getState();
  const sessionId = getSessionId(state);
  let httpClient;
  httpClient = mockHttpClient({ method: 'post' });
  addToListLogic.process({ getState, httpClient, action }, dispatch, done);

  it('matches snapshot', () => {
    expect(addToListLogic).toMatchSnapshot();
  });

  it('called with right arguments', () => {
    const requestUrl = `/list/${listId}/add_item?session_id=${sessionId}`;
    const requestBody = {
      media_id: movieId /* eslint-disable-line camelcase */
    };
    expect(httpClient.post).toHaveBeenCalledWith(requestUrl, requestBody);
  });

  describe('success.', () => {
    action = {
      type: ADD_TO_LIST,
      listId,
      movieId,
      closePopover: jest.fn()
    };
    httpClient = mockHttpClient({ method: 'post' });
    addToListLogic.process({ getState, httpClient, action }, dispatch, done);
    const { closePopover } = action;

    it('Popover is closed', () => {
      expect(closePopover).toHaveBeenCalled();
    });
  });

  it('have been called done()', () => {
    expect(done).toHaveBeenCalled();
  });
});
