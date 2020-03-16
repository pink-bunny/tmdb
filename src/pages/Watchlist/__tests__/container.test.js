import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import ConnectedWatchlist from '../container';
import { fetchWatchlist } from '../../../../state/watchlist/actions';

jest.mock('../../../../state/watchlist/actions', () => ({
  fetchWatchlist: jest.fn()
}));

jest.mock('../../../../state/watchlist/selectors', () => ({
  isWatchlistLoading: jest.fn(() => false),
  watchlistTotalItems: jest.fn(() => 21),
  watchlistCurrentPage: jest.fn(() => 1),
  watchlistError: jest.fn(() => ''),
  watchlistList: jest.fn(() => [{
    id: 1,
    title: 'Title',
    overview: 'Overview',
    poster_path: 'Path' /* eslint-disable-line camelcase */
  }])
}));

describe('Watchlist container', () => {
  const store = configureStore()({});
  store.dispatch = jest.fn();
  const wrapper = shallow(<ConnectedWatchlist store={store} />);
  const container = wrapper.dive().dive();
  const instance = container.instance();

  it('matches snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  it('componentDidMount()', () => {
    instance.componentDidMount();
    expect(fetchWatchlist).toHaveBeenCalled();
  });
});
