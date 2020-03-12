import React from 'react';
import { shallow } from 'enzyme';

import RemoveFromWatchlistModal from '../component';

describe('RemoveFromWatchlistModal component', () => {
  const requiredProps = {
    title: 'Mock title',
    showModal: jest.fn(),
    modalVisible: true,
    hideModal: jest.fn(),
    removeFromWatchlist: jest.fn()
  };
  const wrapper = shallow(<RemoveFromWatchlistModal {...requiredProps} />); /* eslint-disable-line react/jsx-props-no-spreading, max-len */

  it('matches snapshot with required props', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
