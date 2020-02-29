import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import ConnectedLogin, { handleSubmit } from '../container';

describe('Login container', () => {
  const store = configureStore()({});
  store.dispatch = jest.fn();
  const wrapper = shallow(<ConnectedLogin store={store} />);

  it('matches snapshot', () => {
    const container = wrapper.dive().dive().dive();

    expect(container).toMatchSnapshot();
  });

  describe('handleSubmit()', () => {
    it('calls requestSession with arguments', () => {
      const props = { requestSession: jest.fn() };
      const setErrors = jest.fn();
      const setSubmitting = jest.fn();
      const values = {};
      handleSubmit(values, { props, setErrors, setSubmitting });

      expect(props.requestSession).toHaveBeenCalledWith(values, setErrors, setSubmitting);
    });
  });

  describe('validationSchema', () => {
    const container = wrapper.dive().props().validationSchema().describe();

    it('matches snapshot', () => {
      expect(container).toMatchSnapshot();
    });
  });
});
