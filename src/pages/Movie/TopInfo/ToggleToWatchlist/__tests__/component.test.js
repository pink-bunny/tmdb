import React from 'react';
import { shallow } from 'enzyme';

import ToggleToWatchlistComponent from '../component';

describe('ToggleToWatchlistComponent component', () => {
  const requiredProps = {
    watchlist: false,
    changeWatchlistStatus: jest.fn()
  };
  /* eslint-disable react/jsx-props-no-spreading */
  const wrapper = shallow(<ToggleToWatchlistComponent {...requiredProps} />);
  /* eslint-enable react/jsx-props-no-spreading */

  it('matches snapshot with required props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot whenwatchlist is turned on', () => {
    wrapper.setProps({ watchlist: true });

    expect(wrapper).toMatchSnapshot();
  });
});
