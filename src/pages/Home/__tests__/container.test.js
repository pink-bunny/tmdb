import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import ConnectedHome from '../container';

jest.mock('../../../../state/session/selectors', () => ({
  isUserLoggedIn: jest.fn(() => true)
}));

describe('Header container', () => {
  const store = configureStore()({});
  const wrapper = shallow(<ConnectedHome store={store} />);
  const container = wrapper.dive().dive();

  it('should render dashboard', () => {
    expect(container).toMatchSnapshot();
  });

  it('should render login', () => {
    wrapper.setProps({ userLoggedIn: false, custom: 'Hey' });
    // console.log('SS', wrapper.props());

    expect(container).toMatchSnapshot();
  });
});
