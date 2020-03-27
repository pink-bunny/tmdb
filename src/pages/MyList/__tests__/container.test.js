import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import ConnectedMyList from '../container';
import {
  fetchMyList,
  removeFromList,
  clearListIdFromState
} from '../../../../state/my_list/actions';

jest.mock('../../../../state/my_list/actions', () => ({
  fetchMyList: jest.fn(),
  removeFromList: jest.fn(),
  clearListIdFromState: jest.fn()
}));
jest.mock('../../../../state/my_list/selectors', () => ({
  isMyListLoading: jest.fn(() => false),
  myListError: jest.fn(() => ''),
  myListInfo: jest.fn(() => ({ id: 1, name: 'Custom list' })),
  myListMovies: jest.fn(() => [{ id: 1, title: 'Mock title' }])
}));

describe('MyList container', () => {
  const listId = '1';
  const store = configureStore()({});
  const props = {
    store,
    match: { params: { listId } }
  };
  store.dispatch = jest.fn();
  const wrapper = shallow(<ConnectedMyList {...props} />); /* eslint-disable-line react/jsx-props-no-spreading, max-len */
  const container = wrapper.dive().dive();
  const instance = container.instance();

  it('matches snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  it('handleFetchList() called fetchMyList() with list id', () => {
    instance.handleFetchList();
    expect(fetchMyList).toHaveBeenCalledWith(listId);
  });

  it('handleRemoveFromList() called removeFromList() with right arguments', () => {
    const movieId = 1;
    instance.handleRemoveFromList(movieId);
    expect(removeFromList).toHaveBeenCalledWith(listId, movieId);
  });

  it('componentWillUnmount() called clearListIdFromState()', () => {
    instance.componentWillUnmount();
    expect(clearListIdFromState).toHaveBeenCalled();
  });
});
