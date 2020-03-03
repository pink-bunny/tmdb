import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import requireAuth from '../requireAuth';
import { isUserLoggedIn } from '../../../state/session/selectors';

jest.mock('../../../state/session/selectors', () => ({
  isUserLoggedIn: jest.fn(() => false)
}));

describe('requireAuth()', () => {
  const store = configureStore()({});
  const MockPage = () => <div>Mock Page</div>;
  const WrappedComponent = requireAuth(MockPage);

  it('should redirect to the home page unregistered user', () => {
    const wrapper = shallow(<WrappedComponent store={store} />);
    const container = wrapper.dive().dive();

    expect(container).toMatchSnapshot();
  });

  it('should give access to the MockPage for registered user', () => {
    isUserLoggedIn.mockImplementation(() => true);
    const wrapper = shallow(<WrappedComponent store={store} />);
    const container = wrapper.dive().dive();

    expect(container).toMatchSnapshot();
  });
});
