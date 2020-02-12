import { createLogic } from 'redux-logic';

import { DELETE_MY_LIST } from '../types';
import { getSessionId } from '../../session/selectors';
import { fetchMyLists } from '../actions';

const deleteMyListLogic = createLogic({
  type: DELETE_MY_LIST,

  async process({ getState, httpClient, action }, dispatch, done) {
    const { id } = action;
    const state = getState();
    const sessionId = getSessionId(state);

    try {
      await httpClient.delete(`list/${id}?session_id=${sessionId}`);
      dispatch(fetchMyLists());
    } catch (error) {
      const errorMessage = error.response.data.status_message;
      console.error(errorMessage); /* eslint-disable-line */
    }
    done();
  }
});

export default deleteMyListLogic;
