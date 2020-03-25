import { createLogic } from 'redux-logic';
import { getSessionId } from '../../session/selectors';
import { fetchMyList } from '../actions';

import { REMOVE_FROM_LIST } from '../types';

const toggleToListLogic = createLogic({
  type: REMOVE_FROM_LIST,

  async process({ getState, httpClient, action }, dispatch, done) {
    const { listId, movieId } = action;
    const state = getState();
    const sessionId = getSessionId(state);

    try {
      await httpClient.post(`/list/${listId}/remove_item?session_id=${sessionId}`, {
        media_id: movieId /* eslint-disable-line camelcase */
      });

      dispatch(fetchMyList(listId));
    } catch (error) {} /* eslint-disable-line no-empty */
    done();
  }
});

export default toggleToListLogic;
