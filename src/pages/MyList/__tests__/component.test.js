import React from 'react';
import { shallow } from 'enzyme';

import MyList from '../component';

describe('MyList component', () => {
  const requiredProps = {
    loading: false,
    error: '',
    totalItems: 21,
    currentPage: 2,
    fetchList: jest.fn(),
    removeModalAction: jest.fn()
  };
  const wrapper = shallow(<MyList {...requiredProps} />); /* eslint-disable-line react/jsx-props-no-spreading, max-len */

  it('matches snapshot with required props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot with optional props', () => {
    wrapper.setProps({
      listInfo: { id: 1, name: 'Custom list' },
      listMovies: [{ id: 1, title: 'Mock title' }]
    });
    expect(wrapper).toMatchSnapshot();
  });
});
