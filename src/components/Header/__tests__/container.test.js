import configureStore from 'redux-mock-store';

import { completeSession } from '../../../../state/session/actions';

describe('Header container', () => {
  const initialState = {
    session: {
      sessionId: '123456',
      username: 'John Doe',
      userLoggedIn: true
    }
  };
  const store = configureStore()(initialState);
  store.dispatch(completeSession());

  it('should dispatch completeSession action', () => {
    const actions = store.getActions();
    const expectedPayload = { type: 'COMPLETE_SESSION' };

    expect(actions).toEqual([expectedPayload]);
  });
});
