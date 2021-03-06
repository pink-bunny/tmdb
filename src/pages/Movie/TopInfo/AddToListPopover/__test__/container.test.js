import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import ConnectedAddToList from '../container';
import {
  fetchMyLists
} from '../../../../../../state/my_lists/actions';
import {
  createAndAddToList,
  addToList
} from '../../../../../../state/my_list/actions';

jest.mock('../../../../../../state/my_lists/selectors', () => ({
  myListsList: jest.fn(() => [{ id: 1, name: 'Mock name' }])
}));
jest.mock('../../../../../../state/my_lists/actions', () => ({
  fetchMyLists: jest.fn()
}));
jest.mock('../../../../../../state/my_list/actions', () => ({
  addToList: jest.fn(),
  createAndAddToList: jest.fn()
}));

describe('AddToList container', () => {
  const store = configureStore()({});
  const props = {
    store,
    movieId: 123
  };
  store.dispatch = jest.fn();
  const wrapper = shallow(<ConnectedAddToList {...props} />); /* eslint-disable-line react/jsx-props-no-spreading, max-len */
  const container = wrapper.dive().dive();
  const instance = container.instance();

  it('matches snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  it('componentDidUpdate()', () => {
    const prevProps = {};
    const prevState = { popoverVisible: false };
    instance.setState({ popoverVisible: true });

    instance.componentDidUpdate(prevProps, prevState);
    expect(fetchMyLists).toHaveBeenCalled();
  });

  it('sets visiblePopover to false', () => {
    instance.visiblePopover(false);
    expect(container.state('popoverVisible')).toBeFalsy();
  });

  it('closes popover', () => {
    const spyVisiblePopover = jest.spyOn(instance, 'visiblePopover');
    instance.closePopover();
    expect(spyVisiblePopover).toHaveBeenCalledWith(false);
  });

  it('creates list and add movie to it', () => {
    const values = { name: 'Mock name', description: 'Mock description' };
    const setErrors = jest.fn();
    const hideModal = jest.fn();
    const { movieId } = props;
    instance.createListModalSubmit(values, setErrors, hideModal);
    expect(createAndAddToList).toHaveBeenCalledWith(values, setErrors, hideModal, movieId);
  });

  it('adds the movie to the list', () => {
    const spyClosePopover = jest.spyOn(instance, 'closePopover');
    const listId = 123;
    const { movieId } = props;
    instance.addToList(listId);
    expect(addToList).toHaveBeenCalledWith(listId, movieId, spyClosePopover);
  });
});
