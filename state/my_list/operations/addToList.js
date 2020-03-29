import { createLogic } from 'redux-logic';
import { getSessionId } from '../../session/selectors';

import { ADD_TO_LIST } from '../types';

const addToListLogic = createLogic({
  type: ADD_TO_LIST,

  async process({ getState, httpClient, action }, dispatch, done) {
    const { listId, movieId, closePopover } = action;
    const state = getState();
    const sessionId = getSessionId(state);

    try {
      await httpClient.post(`/list/${listId}/add_item?session_id=${sessionId}`, {
        media_id: movieId /* eslint-disable-line camelcase */
      });
      if (closePopover) {
        closePopover();
      }
    } catch (error) {} /* eslint-disable-line no-empty */
    done();
  }
});

export default addToListLogic;
