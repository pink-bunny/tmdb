import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import {
  fetchTrendingMovies,
  searchMovies
} from '../../../../state/dashboard/actions';
import ConnectedDashboard from '../container';

jest.mock('../../../../state/dashboard/selectors', () => ({
  isDashboardMoviesLoading: jest.fn(() => false),
  dashboardMoviesList: jest.fn(() => [{
    id: 1,
    title: 'Title',
    overview: 'Overview',
    poster_path: 'Path' /* eslint-disable-line camelcase */
  }]),
  dashboardMoviesError: jest.fn(() => ''),
  dashboardMoviesTotalPages: jest.fn(() => 21),
  dashboardMoviesCurrentPage: jest.fn(() => 1),
  dashboardMoviesSearchQuery: jest.fn(() => 'query')
}));

jest.mock('../../../../state/dashboard/actions', () => ({
  fetchTrendingMovies: jest.fn(),
  searchMovies: jest.fn()
}));

describe('Dashboard container', () => {
  const store = configureStore()({});
  store.dispatch = jest.fn();
  const wrapper = shallow(<ConnectedDashboard store={store} />).dive().dive();
  const instance = wrapper.instance();

  it('matches snapsot', () => {
    expect(instance).toMatchSnapshot();
  });

  it('componentDidMount()', () => {
    instance.componentDidMount();
    expect(fetchTrendingMovies).toHaveBeenCalled();
  });

  describe('checkSearchState method', () => {
    it('called with search query and page=2', () => {
      const { searchQuery } = instance.props;
      const page = 2;
      instance.checkSearchState(page);
      expect(searchMovies).toHaveBeenCalledWith(searchQuery, page);
    });

    it('has empty search query and page=3', () => {
      const page = 3;

      wrapper.setProps({ searchQuery: '' });
      instance.checkSearchState(page);
      expect(fetchTrendingMovies).toHaveBeenCalledWith(page);
    });
  });
});
