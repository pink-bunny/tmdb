import React from 'react';
import { shallow } from 'enzyme';

import RemoveFromListModal from '../component';

describe('RemoveFromListModal component', () => {
  const requiredProps = {
    title: 'Mock title',
    showModal: jest.fn(),
    modalVisible: true,
    hideModal: jest.fn(),
    removeFromList: jest.fn(),
    removeModalTxt: 'Mock modal text'
  };
  const wrapper = shallow(<RemoveFromListModal {...requiredProps} />); /* eslint-disable-line react/jsx-props-no-spreading, max-len */

  it('matches snapshot with required props', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
