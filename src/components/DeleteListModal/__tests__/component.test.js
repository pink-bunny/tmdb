import React from 'react';
import { shallow } from 'enzyme';

import DeleteListModal from '../component';

describe('DeleteListModal component', () => {
  const requiredProps = {
    name: 'Test list',
    modalVisible: false,
    hideModal: jest.fn(),
    handleTriggerClick: jest.fn(),
    deleteList: jest.fn(),
    triggerComponent: jest.fn(() => <div>Mock button</div>)
  };
  const wrapper = shallow(<DeleteListModal {...requiredProps} />); /* eslint-disable-line */

  it('matches snapshot with required props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot with optional props', () => {
    wrapper.setProps({
      error: 'Delete error',
      triggerProps: { type: 'button', children: 'Mock button' }
    });

    expect(wrapper).toMatchSnapshot();
  });
});
