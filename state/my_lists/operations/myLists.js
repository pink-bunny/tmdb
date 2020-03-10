import { createLogic } from 'redux-logic';

import { FETCH_MY_LISTS } from '../types';
import normalizeMyLists from './normalize/myLists';
import { getSessionId } from '../../session/selectors';
import { fetchMyListsSuccess, fetchMyListsError } from '../actions';
import { mergeListsList } from '../../data/actions';

const myListsLogic = createLogic({
  type: FETCH_MY_LISTS,

  async process({ getState, httpClient }, dispatch, done) {
    const state = getState();
    const sessinId = getSessionId(state);
    try {
      const { data } = await httpClient.get(`/account/{account_id}/lists?session_id=${sessinId}`);

      // normalize data
      const { lists, ids } = normalizeMyLists(data);

      dispatch(mergeListsList(lists));
      dispatch(fetchMyListsSuccess(ids));
    } catch (error) {
      const errorMessage = error.response.data.status_message;
      dispatch(fetchMyListsError(errorMessage));
    }
    done();
  }
});

export default myListsLogic;
