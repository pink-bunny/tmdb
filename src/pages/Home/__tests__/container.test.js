import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import ConnectedHome from '../container';
import { isUserLoggedIn } from '../../../../state/session/selectors';

jest.mock('../../../../state/session/selectors', () => ({
  isUserLoggedIn: jest.fn(() => true)
}));

describe('Header container.', () => {
  const store = configureStore()({});

  describe('User is logged in.', () => {
    const wrapper = shallow(<ConnectedHome store={store} />).dive().dive();

    it('Should render dashboard', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('User is not logged in.', () => {
    it('Should render login', () => {
      isUserLoggedIn.mockImplementation(() => false);
      const wrapper = shallow(<ConnectedHome store={store} />).dive().dive();

      expect(wrapper).toMatchSnapshot();
    });
  });
});
