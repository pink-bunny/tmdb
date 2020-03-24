import React from 'react';
import { shallow } from 'enzyme';

import PopoverContent from '../component';

describe('PopoverContent component', () => {
  const requiredProps = {
    addToList: jest.fn(),
    closePopover: jest.fn(),
    createListModalSubmit: jest.fn()
  };
  const wrapper = shallow(<PopoverContent {...requiredProps} />); /* eslint-disable-line react/jsx-props-no-spreading, max-len */

  it('matches snapshot with required props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot with optional props', () => {
    wrapper.setProps({
      list: [
        { id: 1, name: 'Mock name 1' },
        { id: 2, name: 'Mock name 2' }
      ]
    });
    expect(wrapper).toMatchSnapshot();
  });
});
