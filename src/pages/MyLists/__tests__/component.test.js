import React from 'react';
import { shallow } from 'enzyme';

import MyLists from '../component';

test('MyLists component matches snapshot', () => {
  const requiredProps = {
    list: [],
    loading: false,
    error: ''
  };
  const wrapper = shallow(<MyLists {...requiredProps} />); /* eslint-disable-line */

  expect(wrapper).toMatchSnapshot();
});
