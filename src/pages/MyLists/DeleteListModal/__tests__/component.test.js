import React from 'react';
import { shallow } from 'enzyme';

import DeleteListModal from '../component';

describe('DeleteListModal component matches snapshot', () => {
  const requiredProps = {
    name: 'Test list',
    modalVisible: false,
    hideModal: jest.fn(),
    showModal: jest.fn(),
    deleteList: jest.fn()
  };

  it('with required props', () => {
    const wrapper = shallow(<DeleteListModal {...requiredProps} />); /* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });

  it('with error', () => {
    const props = {
      ...requiredProps,
      error: 'Delete error'
    };
    const wrapper = shallow(<DeleteListModal {...props} />); /* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });
});
