import React from 'react';
import { shallow } from 'enzyme';

import MyLists from '../component';

describe('MyLists component', () => {
  const requiredProps = {
    list: [],
    loading: false,
    error: ''
  };

  it('matches snapshot', () => {
    const wrapper = shallow(<MyLists {...requiredProps} />); /* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });
});
