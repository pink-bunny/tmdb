import { createLogic } from 'redux-logic';
import { getSessionId } from '../../session/selectors';

import { toggleToList } from '../actions';
import { CREATE_AND_ADD_TO_LIST } from '../types';

const createAndAddToListLogic = createLogic({
  type: CREATE_AND_ADD_TO_LIST,

  async process({ getState, httpClient, action }, dispatch, done) {
    const {
      name,
      description,
      hideModal,
      setErrors,
      movieId
    } = action;
    const state = getState();
    const sessionId = getSessionId(state);

    try {
      const { data } = await httpClient.post(`/list?session_id=${sessionId}`, {
        name,
        description
      });
      const { list_id: listId } = data;

      dispatch(toggleToList(listId, movieId));
      hideModal();
    } catch (error) {
      const createNewListError = error.response.data.status_message;
      setErrors({ serverError: createNewListError });
    }
    done();
  }
});

export default createAndAddToListLogic;
