import React from 'react';
import { shallow } from 'enzyme';

import Search from '../component';

test('Search component matches snapshot', () => {
  const requiredProps = {
    handleSubmit: jest.fn()
  };
  const wrapper = shallow(<Search {...requiredProps} />);/* eslint-disable-line */

  expect(wrapper).toMatchSnapshot();
});
