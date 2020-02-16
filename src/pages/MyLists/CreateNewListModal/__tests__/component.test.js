import React from 'react';
import { shallow } from 'enzyme';

import CreateNewListModal from '../component';

describe('CreateNewListModal component matches snapshot', () => {
  const requiredProps = {
    showModal: jest.fn(),
    modalVisible: false,
    hideModal: jest.fn(),
    handleSubmit: jest.fn()
  };

  it('with required props', () => {
    const wrapper = shallow(<CreateNewListModal {...requiredProps} />); /* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });

  it('with server error', () => {
    const props = {
      ...requiredProps,
      errors: { serverError: 'Server error' }
    };
    const wrapper = shallow(<CreateNewListModal {...props} />); /* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });
});
