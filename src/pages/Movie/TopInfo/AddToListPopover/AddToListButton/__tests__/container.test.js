import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import AddToListButton from '../container';

describe('AddToListButton container', () => {
  const store = configureStore()({});
  const props = {
    store,
    id: 1,
    name: 'Mock name',
    addToList: jest.fn()
  };
  store.dispatch = jest.fn();
  const wrapper = shallow(<AddToListButton {...props} />); /* eslint-disable-line react/jsx-props-no-spreading, max-len */
  const container = wrapper;
  const instance = container.instance();

  it('matches snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  it('handleCLick() called addToList(id)', () => {
    const { id, addToList } = props;
    instance.handleCLick();
    expect(addToList).toHaveBeenCalledWith(id);
  });
});
