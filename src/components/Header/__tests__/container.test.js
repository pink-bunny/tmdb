import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import ConnectedHeader from '../container';
import { completeSession } from '../../../../state/session/actions';

describe('Header container', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    const initialState = {
      session: {
        sessionId: '123456',
        username: 'John Doe',
        userLoggedIn: true
      }
    };
    store = configureStore()(initialState);
    wrapper = shallow(<ConnectedHeader store={store} />).dive();
    store.dispatch(completeSession());
  });


  it('should dispatch completeSession action', () => {
    const actions = store.getActions();
    const expectedPayload = { type: 'COMPLETE_SESSION' };

    expect(actions).toEqual([expectedPayload]);
  });

  it('mapStateToProps should contain username equals "John Doe"', () => {
    expect(wrapper.props().store.getState().session.username).toMatch('John Doe');
  });

  it('mapStateToProps should contain userLoggedIn equals true', () => {
    expect(wrapper.props().store.getState().session.userLoggedIn).toBe(true);
  });
});
