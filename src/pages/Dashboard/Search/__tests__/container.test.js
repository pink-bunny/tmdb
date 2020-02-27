import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import ConnectedSearch, { handleSubmit } from '../container';

describe('DashboardSearch container', () => {
  const store = configureStore()({});
  store.dispatch = jest.fn();
  const wrapper = shallow(<ConnectedSearch store={store} />);

  it('matches snapshot', () => {
    const container = wrapper.dive().dive().dive();

    expect(container).toMatchSnapshot();
  });

  describe('handleSubmit()', () => {
    it('calls searchMovies with search argument', () => {
      const searchMovies = jest.fn();
      const props = { searchMovies };
      const values = { search: 'mock' };
      handleSubmit(values, { props });

      expect(props.searchMovies).toHaveBeenCalledWith(values.search);
    });
  });

  describe('validationSchema', () => {
    const container = wrapper.dive().props().validationSchema().describe();

    expect(container).toMatchSnapshot();
  });
});
