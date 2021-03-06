import React from 'react';
import { shallow } from 'enzyme';

import Login from '../component';

describe('Login component', () => {
  const requiredProps = {
    isSubmitting: false,
    handleSubmit: jest.fn()
  };

  it('matches snapshot with required props', () => {
    const wrapper = shallow(<Login {...requiredProps} />); /* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot with server error', () => {
    const props = {
      ...requiredProps,
      errors: { serverError: 'Server error' }
    };
    const wrapper = shallow(<Login {...props} />); /* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });
});
