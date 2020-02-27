import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import ConnectedHeader from '../container';

jest.mock('../../../../state/session/selectors', () => ({
  isUserLoggedIn: jest.fn(() => true),
  username: jest.fn(() => 'John Doe')
}));

describe('Header container', () => {
  const store = configureStore()({});
  const wrapper = shallow(<ConnectedHeader store={store} />).dive();

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
