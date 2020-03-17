import React from 'react';
import { shallow } from 'enzyme';

import MovieComponent from '../component';

describe('MovieComponent component', () => {
  const requiredProps = {
    loading: false
  };
  const wrapper = shallow(<MovieComponent {...requiredProps} />); /* eslint-disable-line */

  it('matches snapshot with required props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapsot when component is loading', () => {
    wrapper.setProps({ loading: true });

    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapsot when component has error', () => {
    wrapper.setProps({
      ...requiredProps,
      error: 'Mock error'
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapsot when component has details', () => {
    wrapper.setProps({
      ...requiredProps,
      error: '',
      details: {
        id: 1,
        title: 'Mock title',
        original_language: 'Mock language', /* eslint-disable-line camelcase */
        budget: 1000000,
        revenue: 50000,
        genres: [{ id: 1, name: 'Mock genre' }],
        watchlist: false,
        favorite: true,
        backdrops: [{}],
        cast: [{}],
        crew: [{}]
      }
    });

    expect(wrapper).toMatchSnapshot();
  });
});
