import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import ConnectedWatchlist from '../container';

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
  const props = {
    store,
    listTitle: 'Mock list title',
    emptyListTxt: 'Mock empty list text',
    fetchList: jest.fn(),
    removeModalAction: jest.fn(),
    removeModalTxt: 'Mock modal text'
  };
  store.dispatch = jest.fn();
  const wrapper = shallow(<ConnectedWatchlist {...props} />);
  const container = wrapper.dive();

  it('matches snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
