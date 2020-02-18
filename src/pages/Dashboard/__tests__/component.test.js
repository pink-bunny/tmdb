import React from 'react';
import { shallow } from 'enzyme';

import Dashboard from '../component';
import Search from '../Search';

describe('Dashboard component', () => {
  const requiredProps = {
    loading: false,
    error: '',
    totalItems: 0,
    fetchMovies: jest.fn(),
    currentPage: 0
  };
  it('matches snapshot with required props', () => {
    const wrapper = shallow(<Dashboard {...requiredProps} />);/* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot with custom props', () => {
    const props = {
      ...requiredProps,
      list: [{
        id: 1,
        title: 'Terminator: Dark Fate',
        overview: 'Decades after Sarah Connor prevented Judgment Day.',
        poster_path: '/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg' /* eslint-disable-line */
      }]
    };
    const wrapper = shallow(<Dashboard {...props} />); /* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot and contains Search', () => {
    const wrapper = shallow(<Dashboard {...requiredProps} />);/* eslint-disable-line */

    expect(wrapper.contains(<Search />)).toEqual(true);
  });
});
