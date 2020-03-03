import React from 'react';
import { shallow } from 'enzyme';

import withModal from '../withModal';

describe('withModal HOC', () => {
  const MockModal = () => <div>Mock modal</div>;
  const WrapedModal = withModal(MockModal);
  const wrapper = shallow(<WrapedModal />);
  const instance = wrapper.instance();

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('has method', () => {
    it('showModal() and set modalVisible to true', () => {
      instance.showModal();
      expect(wrapper.state().modalVisible).toBe(true);
    });

    it('hideModal() and set modalVisible to false', () => {
      instance.hideModal();
      expect(wrapper.state().modalVisible).toBe(false);
    });
  });
});
