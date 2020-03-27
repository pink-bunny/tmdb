import { createLogic } from 'redux-logic';
import history from '../../../lib/history';

import { DELETE_MY_LIST } from '../types';
import { getSessionId } from '../../session/selectors';
import { deleteMyListError } from '../actions';
import { fetchMyLists } from '../../my_lists/actions';

const deleteMyListLogic = createLogic({
  type: DELETE_MY_LIST,

  async process({ getState, httpClient, action }, dispatch, done) {
    const { id, hideModal, needRedirect } = action;
    const state = getState();
    const sessionId = getSessionId(state);

    try {
      await httpClient.delete(`list/${id}?session_id=${sessionId}`);
      // We do not have to handle success case until https://developers.themoviedb.org/ fixes
      // throwing error on success response
    } catch (error) {
      const errorMessage = error.response.data.status_message;
      hideModal();
      if (needRedirect) {
        history.goBack();
      }
      dispatch(deleteMyListError(errorMessage));
      dispatch(fetchMyLists());
    }
    done();
  }
});

export default deleteMyListLogic;
