import React from 'react';
import { shallow } from 'enzyme';

import Dashboard from '../component';
import Search from '../Search';

describe('Dashboard component matches snapshot', () => {
  const requiredProps = {
    loading: false,
    error: '',
    totalItems: 0,
    fetchMovies: jest.fn(),
    currentPage: 0
  };
  it('with required props', () => {
    const wrapper = shallow(<Dashboard {...requiredProps} />);/* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });

  it('with custom props', () => {
    const props = {
      ...requiredProps,
      list: []
    };
    const wrapper = shallow(<Dashboard {...props} />); /* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });

  it('and contains Search', () => {
    const wrapper = shallow(<Dashboard {...requiredProps} />);/* eslint-disable-line */

    expect(wrapper.contains(<Search />)).toEqual(true);
  });
});
