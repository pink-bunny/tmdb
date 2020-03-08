import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import ConnectedToggleToWatchlist from '../container';
import { toggleToWatchlist } from '../../../../../../state/watchlist/actions';

jest.mock('../../../../../../state/watchlist/actions', () => ({
  toggleToWatchlist: jest.fn()
}));

describe('ToggleToWatchlist container', () => {
  const store = configureStore()({});
  const props = {
    store,
    id: 1,
    watchlist: false
  };
  store.dispatch = jest.fn();
  const wrapper = shallow(<ConnectedToggleToWatchlist {...props} />); /* eslint-disable-line */
  const container = wrapper.dive();
  const instance = container.instance();

  it('matches snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  it('changeWatchlistStatus() trigger toggleToWatchlist()', () => {
    const {
      id,
      watchlist
    } = instance.props;
    const updatedStatus = !watchlist;
    instance.changeWatchlistStatus();

    expect(toggleToWatchlist).toHaveBeenCalledWith(id, updatedStatus);
  });
});
