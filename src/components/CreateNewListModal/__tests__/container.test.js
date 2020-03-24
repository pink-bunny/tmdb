import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import ConnectedCreateNewListModal, { handleSubmit } from '../container';

describe('CreateNewListModal', () => {
  const store = configureStore()({});
  const requiredProps = {
    store,
    modalVisible: false,
    showModal: jest.fn(),
    triggerComponent: jest.fn(() => <div>Mock button</div>)
  };
  store.dispatch = jest.fn();

  describe('container', () => {
    describe('without trigger props', () => {
      const wrapper = shallow(<ConnectedCreateNewListModal {...requiredProps} />); /* eslint-disable-line react/jsx-props-no-spreading, max-len */
      const container = wrapper.dive().dive().dive().dive();
      const instance = container.instance();
      const { showModal } = requiredProps;

      it('matches snapshot', () => {
        expect(container).toMatchSnapshot();
      });

      it('handleTriggerClick() called only showModal()', () => {
        instance.handleTriggerClick();
        expect(showModal).toHaveBeenCalled();
      });
    });

    describe('with trigger props', () => {
      const props = {
        ...requiredProps,
        triggerProps: {
          classname: 'mock-button',
          onClick: jest.fn()
        }
      };
      const wrapper = shallow(<ConnectedCreateNewListModal {...props} />); /* eslint-disable-line react/jsx-props-no-spreading, max-len */
      const container = wrapper.dive().dive().dive().dive();
      const instance = container.instance();
      const { triggerProps, showModal } = props;

      it('matches snapshot', () => {
        expect(container).toMatchSnapshot();
      });

      it('handleTriggerClick() called triggerProps.onClick() and showModal()', () => {
        instance.handleTriggerClick();
        expect(triggerProps.onClick).toHaveBeenCalled();
        expect(showModal).toHaveBeenCalled();
      });
    });
  });

  describe('form.', () => {
    describe('handleSubmit()', () => {
      const props = {
        hideModal: jest.fn(),
        handleSubmitList: jest.fn()
      };
      const setErrors = jest.fn();
      const values = {};

      it('calls createMyList with arguments', () => {
        handleSubmit(values, { props, setErrors });
        expect(props.handleSubmitList).toHaveBeenCalledWith(values, setErrors, props.hideModal);
      });
    });

    describe('validationSchema', () => {
      const wrapper = shallow(<ConnectedCreateNewListModal {...requiredProps} />); /* eslint-disable-line react/jsx-props-no-spreading, max-len */
      const container = wrapper.dive().props().validationSchema()
        .describe();

      it('matches snapshot', () => {
        expect(container).toMatchSnapshot();
      });
    });
  });
});
