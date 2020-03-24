import { createLogic } from 'redux-logic';

import { FETCH_MY_LIST } from '../types';
import normalizeMyList from '../../../utils/normalize/myList';
import { getSessionId } from '../../session/selectors';
import { fetchMyListSuccess, fetchMyListError } from '../actions';
import { mergeListsList } from '../../data/actions';

const myListLogic = createLogic({
  type: FETCH_MY_LIST,

  async process({ getState, httpClient, action }, dispatch, done) {
    const state = getState();
    const sessinId = getSessionId(state);
    const { id: movieId } = action;
    try {
      const { data } = await httpClient.get(`/list/${movieId}?session_id=${sessinId}`);

      // normalize data
      const { list } = normalizeMyList(data);

      dispatch(mergeListsList(list));
      dispatch(fetchMyListSuccess(movieId));
    } catch (error) {
      const errorMessage = error.response.data.status_message;
      dispatch(fetchMyListError(errorMessage));
    }
    done();
  }
});

export default myListLogic;
