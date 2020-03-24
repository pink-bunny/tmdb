import React from 'react';
import { shallow } from 'enzyme';

import AddToListButton from '../component';

describe('AddToListButton component', () => {
  const requiredProps = {
    name: 'Mock name',
    handleCLick: jest.fn()
  };
  const wrapper = shallow(<AddToListButton {...requiredProps} />); /* eslint-disable-line react/jsx-props-no-spreading, max-len */

  it('matches snapshot with required props', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
