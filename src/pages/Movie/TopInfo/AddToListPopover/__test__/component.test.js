import React from 'react';
import { shallow } from 'enzyme';

import AddToListComponent from '../component';

describe('AddToList component', () => {
  const requiredProps = {
    addToList: jest.fn(),
    closePopover: jest.fn(),
    popoverVisible: true,
    handleVisiblePopover: jest.fn(),
    popoverCreateListModalSubmit: jest.fn()
  };
  const wrapper = shallow(<AddToListComponent {...requiredProps} />); /* eslint-disable-line react/jsx-props-no-spreading, max-len */

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
