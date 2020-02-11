import { createLogic } from 'redux-logic';

import { CREATE_MY_LIST } from '../types';
import { getSessionId } from '../../session/selectors';
import { fetchMyLists } from '../actions';

const createNewListLogic = createLogic({
  type: CREATE_MY_LIST,

  async process({ getState, httpClient, action }, dispatch, done) {
    const {
      name,
      description,
      hideModal,
      setErrors
    } = action;
    const state = getState();
    const sessionId = getSessionId(state);

    try {
      await httpClient.post(`/list?session_id=${sessionId}`, {
        name,
        description
      });

      hideModal();
      dispatch(fetchMyLists());
    } catch (error) {
      const [createNewListError] = error.response.data.errors;
      setErrors({ serverError: createNewListError });
    }
    done();
  }
});

export default createNewListLogic;
