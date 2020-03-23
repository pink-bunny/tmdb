import React from 'react';
import { shallow } from 'enzyme';

import MyLists from '../component';

describe('MyLists component', () => {
  const requiredProps = {
    createMyList: jest.fn(),
    loading: false,
    error: ''
  };
  const wrapper = shallow(<MyLists {...requiredProps} />); /* eslint-disable-line */

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('received list array and matches snapshot', () => {
    wrapper.setProps({
      list: [{ id: 1, title: 'Mock title' }]
    });
    expect(wrapper).toMatchSnapshot();
  });
});
