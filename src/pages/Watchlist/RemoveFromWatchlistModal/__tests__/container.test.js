import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import ConnectedRemoveFromWatchlistModal from '../container';
import { toggleToWatchlist } from '../../../../../state/watchlist/actions';

jest.mock('../../../../../state/watchlist/actions', () => ({
  toggleToWatchlist: jest.fn()
}));

describe('RemoveFromWatchlistModal container', () => {
  const store = configureStore()({});
  const props = {
    store,
    title: 'Mock title',
    id: 1
  };
  store.dispatch = jest.fn();
  const wrapper = shallow(<ConnectedRemoveFromWatchlistModal {...props} />);/* eslint-disable-line react/jsx-props-no-spreading, max-len */
  const container = wrapper.dive().dive();
  const instance = container.instance();

  it('matches snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  it('calls removeFromWatchlist() and dispatch toggleToWatchlist() with arguments', () => {
    const { id } = wrapper.props();
    const watchlist = false;
    const needRefetchWatchlist = true;
    instance.removeFromWatchlist();
    expect(toggleToWatchlist).toHaveBeenCalledWith(id, watchlist, needRefetchWatchlist);
  });
});
