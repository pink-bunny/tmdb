import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import ConnectedRemoveFromListModal from '../container';

describe('RemoveFromListModal container', () => {
  const store = configureStore()({});
  const props = {
    store,
    title: 'Mock title',
    id: 1,
    removeModalAction: jest.fn()
  };
  store.dispatch = jest.fn();
  const wrapper = shallow(<ConnectedRemoveFromListModal {...props} />);/* eslint-disable-line react/jsx-props-no-spreading, max-len */
  const container = wrapper.dive();
  const instance = container.instance();

  it('matches snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  it('calls removeFromList() and dispatch removeModalAction() with arguments', () => {
    const { id, removeModalAction } = wrapper.props();
    const newItemStatus = false;
    const needRefetchList = true;
    instance.removeFromList();
    expect(removeModalAction).toHaveBeenCalledWith(id, newItemStatus, needRefetchList);
  });
});
