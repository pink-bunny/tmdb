import { createLogic } from 'redux-logic';

import { FETCH_MY_LIST } from '../types';
import normalizeMyList from '../../../utils/normalize/myList';
import { getSessionId } from '../../session/selectors';
import { fetchMyListSuccess, fetchMyListError } from '../actions';
import { mergeListsList, mergeMoviesList } from '../../data/actions';

const myListLogic = createLogic({
  type: FETCH_MY_LIST,

  async process({ getState, httpClient, action }, dispatch, done) {
    const state = getState();
    const sessionId = getSessionId(state);
    const { id } = action;
    try {
      const { data } = await httpClient.get(`/list/${id}?session_id=${sessionId}`);

      // normalize data
      const { lists, movies } = normalizeMyList(data);

      dispatch(mergeListsList(lists));
      dispatch(mergeMoviesList(movies));
      dispatch(fetchMyListSuccess(id));
    } catch (error) {
      const errorMessage = error.response.data.status_message;
      dispatch(fetchMyListError(errorMessage));
    }
    done();
  }
});

export default myListLogic;
