import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import ConnectedMovie from '../container';
import { fetchMovie } from '../../../../state/movie/actions';
import { movieError } from '../../../../state/movie/selectors';

jest.mock('../../../../state/movie/selectors', () => ({
  isMovieLoading: jest.fn(() => false),
  movieError: jest.fn(),
  movieDetails: jest.fn()
}));

jest.mock('../../../../state/movie/actions', () => ({
  fetchMovie: jest.fn()
}));

describe('Movie container', () => {
  const store = configureStore()({});
  const requiredProps = {
    store,
    match: {
      params: {
        movieId: '1'
      }
    }
  };
  store.dispatch = jest.fn();
  const wrapper = shallow(<ConnectedMovie {...requiredProps} />); /* eslint-disable-line */
  const container = wrapper.dive().dive();
  const instance = container.instance();

  it('matches snapshot with required props', () => {
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with error', () => {
    movieError.mockImplementation(() => 'Mock error');
    const wrapperError = shallow(<ConnectedMovie {...requiredProps} />); /* eslint-disable-line */
    const containerError = wrapperError.dive().dive();

    expect(containerError).toMatchSnapshot();
  });

  it('componentDidMount() method run with movie id', () => {
    const { match } = instance.props;
    const { movieId } = match.params;
    instance.componentDidMount();

    expect(fetchMovie).toHaveBeenCalledWith(movieId);
  });
});
