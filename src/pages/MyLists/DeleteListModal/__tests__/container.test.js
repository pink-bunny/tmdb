import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import ConnectedDeleteListModal from '../container';
import { deleteMyList } from '../../../../../state/my_list/actions';

jest.mock('../../../../../state/my_list/actions', () => ({
  deleteMyList: jest.fn()
}));

jest.mock('../../../../../state/my_lists/selectors', () => ({
  myListsDeleteListError: jest.fn(() => '')
}));

describe('DeleteListModalContainer', () => {
  const store = configureStore()({});
  const props = {
    store,
    name: 'Mock list',
    id: 1
  };
  store.dispatch = jest.fn();
  /* eslint-disable react/jsx-props-no-spreading */
  const wrapper = shallow(<ConnectedDeleteListModal {...props} />).dive().dive().dive();
  /* eslint-enable react/jsx-props-no-spreading */
  const instance = wrapper.instance();

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('deleteList method called with params', () => {
    wrapper.setProps({ hideModal: jest.fn() });
    const { id, hideModal } = wrapper.props();

    instance.deleteList();
    expect(deleteMyList).toHaveBeenCalledWith(id, hideModal);
  });
});
