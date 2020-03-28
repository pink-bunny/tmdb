import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import ConnectedList from '../container';

describe('List container', () => {
  const store = configureStore()({});
  store.dispatch = jest.fn();
  const props = {
    store,
    removeModalTxt: 'Mock modal text',
    emptyListTxt: 'Mock empty list text',
    fetchList: jest.fn(),
    removeModalAction: jest.fn(),
    loading: true,
    error: '',
    totalItems: 21,
    currentPage: 1
  };
  const wrapper = shallow(<ConnectedList {...props} />); /* eslint-disable-line react/jsx-props-no-spreading, max-len */
  const container = wrapper;
  const instance = container.instance();

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('received list', () => {
    wrapper.setProps({
      list: [
        { id: 1, title: 'Mock title' },
        { id: 2, title: 'Mock title' }
      ]
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('componentDidMount() to have been called fetchList()', () => {
    const { fetchList } = wrapper.props();
    instance.componentDidMount();
    expect(fetchList).toHaveBeenCalled();
  });
});
