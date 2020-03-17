import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import ConnectedFavorites from '../container';

jest.mock('../../../../state/favorites/selectors', () => ({
  isFavoritesLoading: jest.fn(() => false),
  favoritesTotalItems: jest.fn(() => 21),
  favoritesCurrentPage: jest.fn(() => 1),
  favoritesError: jest.fn(() => ''),
  favoritesList: jest.fn(() => [{
    id: 1,
    title: 'Title',
    overview: 'Overview',
    poster_path: 'Path' /* eslint-disable-line camelcase */
  }])
}));

describe('Favorites container', () => {
  const store = configureStore()({});
  store.dispatch = jest.fn();
  const wrapper = shallow(<ConnectedFavorites store={store} />);
  const container = wrapper.dive().dive();

  it('matches snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
