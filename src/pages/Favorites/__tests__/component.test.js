import React from 'react';
import { shallow } from 'enzyme';

import Favorites from '../component';

describe('Favorites component', () => {
  const requiredProps = {
    loading: false,
    error: '',
    totalItems: 21,
    currentPage: 2,
    fetchList: jest.fn(),
    removeModalAction: jest.fn()
  };
  const wrapper = shallow(<Favorites {...requiredProps} />); /* eslint-disable-line react/jsx-props-no-spreading, max-len */

  it('matches snapshot with required props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot with optional props', () => {
    wrapper.setProps({
      list: [{ id: 1, name: 'Mock name' }]
    });
    expect(wrapper).toMatchSnapshot();
  });
});
