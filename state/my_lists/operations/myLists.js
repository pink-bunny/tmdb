import { createLogic } from 'redux-logic';
import { normalize, schema } from 'normalizr';

import { FETCH_MY_LISTS } from '../types';
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
      const list = new schema.Entity('lists');
      const listsSchema = { results: [list] };
      const normalizedData = normalize(data, listsSchema);
      const { lists } = normalizedData.entities;
      const ids = normalizedData.result.results;

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
