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

  it('matches snapshot with required props', () => {
    const wrapper = shallow(<DeleteListModal {...requiredProps} />); /* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot with error', () => {
    const props = {
      ...requiredProps,
      error: 'Delete error'
    };
    const wrapper = shallow(<DeleteListModal {...props} />); /* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });
});
