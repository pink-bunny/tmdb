import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import ConnectedMyLists from '../container';
import { fetchMyLists } from '../../../../state/my_lists/actions';

jest.mock('../../../../state/my_lists/actions', () => ({
  fetchMyLists: jest.fn()
}));

jest.mock('../../../../state/my_lists/selectors', () => ({
  isMyListsLoading: jest.fn(() => true),
  myListsList: jest.fn(() => [{
    id: 1,
    name: 'My favorites movies',
    description: 'Description of my favorites movies'
  }]),
  myListsListError: jest.fn(() => '')
}));

describe('MyListsContainer container', () => {
  const store = configureStore()({});
  store.dispatch = jest.fn();
  const wrapper = shallow(<ConnectedMyLists store={store} />).dive().dive();
  const instance = wrapper.instance();

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('componentDidMount()', () => {
    instance.componentDidMount();
    expect(fetchMyLists).toHaveBeenCalled();
  });
});
