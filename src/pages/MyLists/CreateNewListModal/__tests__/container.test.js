import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import ConnectedCreateNewListModal, { handleSubmit } from '../container';

describe('CreateNewListModal container', () => {
  const store = configureStore()({});
  store.dispatch = jest.fn();
  const wrapper = shallow(<ConnectedCreateNewListModal store={store} />);

  it('matches snapshot', () => {
    const container = wrapper.dive().dive().dive().dive();

    expect(container).toMatchSnapshot();
  });

  describe('handleSubmit()', () => {
    it('calls createMyList with arguments', () => {
      const props = {
        hideModal: jest.fn(),
        createMyList: jest.fn()
      };
      const setErrors = jest.fn();
      const values = {};
      handleSubmit(values, { props, setErrors });

      expect(props.createMyList).toHaveBeenCalledWith(values, setErrors, props.hideModal);
    });
  });

  describe('validationSchema', () => {
    const container = wrapper.dive().dive().props().validationSchema()
      .describe();

    it('matches snapshot', () => {
      expect(container).toMatchSnapshot();
    });
  });
});
