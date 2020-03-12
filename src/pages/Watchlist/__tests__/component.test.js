import React from 'react';
import { shallow } from 'enzyme';

import WatchlistComponent from '../component';

describe('Watchlist component', () => {
  const requiredProps = {
    loading: false,
    error: '',
    totalItems: 0,
    fetchWatchlist: jest.fn(),
    currentPage: 0
  };
  const wrapper = shallow(<WatchlistComponent {...requiredProps} />); /* eslint-disable-line react/jsx-props-no-spreading, max-len */

  it('matches snapshot with required props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot with custom props', () => {
    wrapper.setProps({
      list: [{
        id: 1,
        title: 'Terminator: Dark Fate',
        overview: 'Decades after Sarah Connor prevented Judgment Day.',
        poster_path: '/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg' /* eslint-disable-line camelcase */
      }]
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('passes actions array to <List />', () => {
    const actionsList = wrapper.find('List').renderProp('actionsList')(1, 'Mock title');
    expect(actionsList).toMatchSnapshot();
  });
});
