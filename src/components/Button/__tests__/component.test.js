import React from 'react';
import { shallow } from 'enzyme';

import Button from '../index';

describe('Button component', () => {
  it('matches snapshot without props', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot with custom props', () => {
    const props = {
      text: 'Custom button',
      type: 'dashed',
      htmlType: 'submit',
      loading: true,
      onClick: jest.fn()
    };
    const wrapper = shallow(<Button {...props} />); /* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });
});
