import React from 'react';
import { shallow } from 'enzyme';

import Header from '../component';

describe('Header component matches snapshot', () => {
  const requiredProps = {
    completeSession: jest.fn(),
    userLoggedIn: false,
    username: ''
  };

  it('when user logged out', () => {
    const wrapper = shallow(<Header {...requiredProps} />); /* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });

  it('when user logged in', () => {
    const props = {
      ...requiredProps,
      userLoggedIn: true,
      username: 'John Doe'
    };
    const wrapper = shallow(<Header {...props} />); /* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });
});
