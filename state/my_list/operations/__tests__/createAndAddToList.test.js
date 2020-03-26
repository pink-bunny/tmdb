import createAndAddToListLogic from '../createAndAddToList';

import { CREATE_AND_ADD_TO_LIST } from '../../types';
import { getSessionId } from '../../../session/selectors';
import { addToList } from '../../actions';
import mockHttpClient from '../../../../utils/testsHelpers/mockHttpClient';
import {
  createAndAddToListResponceSuccess,
  createAndAddToListResponceError
} from '../__mocks__/createAndAddToList';

jest.mock('../../actions', () => ({
  addToList: jest.fn()
}));

describe('createAndAddToList logic', () => {
  const name = 'Mock list';
  const description = 'Mock description';
  const hideModal = jest.fn();
  const setErrors = jest.fn();
  const movieId = 123;
  const action = {
    type: CREATE_AND_ADD_TO_LIST,
    name,
    description,
    setErrors,
    hideModal,
    movieId
  };
  const dispatch = jest.fn();
  const done = jest.fn();
  const getState = jest.fn(() => ({ session: { sessionId: '1q2w3e4r5t' } }));
  const state = getState();
  const sessionId = getSessionId(state);
  let httpClient;
  httpClient = mockHttpClient({ method: 'post', response: createAndAddToListResponceSuccess });
  createAndAddToListLogic.process({ getState, httpClient, action }, dispatch, done);

  it('matches snapshot', () => {
    expect(createAndAddToListLogic).toMatchSnapshot();
  });

  it('called with right arguments', () => {
    const requestUrl = `/list?session_id=${sessionId}`;
    const requestBody = {
      name,
      description
    };
    expect(httpClient.post).toHaveBeenCalledWith(requestUrl, requestBody);
  });

  describe('success.', () => {
    const { data } = createAndAddToListResponceSuccess;
    const { list_id: listId } = data;

    it('Dispatch addToList() with right arguments', () => {
      expect(addToList).toHaveBeenCalledWith(listId, movieId);
    });
    it('Hide modal', () => {
      expect(hideModal).toHaveBeenCalled();
    });
  });

  describe('failure.', () => {
    httpClient = mockHttpClient({ method: 'post', response: createAndAddToListResponceError, reject: true });
    createAndAddToListLogic.process({ getState, httpClient, action }, dispatch, done);
    const error = createAndAddToListResponceError;
    const createNewListError = error.response.data.status_message;

    it('Set server error', () => {
      expect(setErrors).toHaveBeenCalledWith({ serverError: createNewListError });
    });
  });

  it('have been called done()', () => {
    expect(done).toHaveBeenCalled();
  });
});
