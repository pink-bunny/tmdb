import React from 'react';
import { shallow } from 'enzyme';

import InputField from '../index';

describe('InputField component matches snapshot', () => {
  const fieldName = 'password';
  const requiredProps = {
    field: {
      name: fieldName
    },
    form: {
      touched: {},
      errors: {}
    }
  };

  it('with required props', () => {
    const wrapper = shallow(<InputField {...requiredProps} />); /* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });

  it('with icon', () => {
    const props = {
      ...requiredProps,
      icon: 'lock'
    };
    const wrapper = shallow(<InputField {...props} />); /* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });

  it('with custom props', () => {
    const props = {
      ...requiredProps,
      type: 'password',
      autoComplete: 'on',
      placeholder: 'Enter password',
      icon: 'lock'
    };
    const wrapper = shallow(<InputField {...props} />); /* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });

  it('when field is touched and has error', () => {
    const props = {
      ...requiredProps,
      form: {
        touched: {
          [fieldName]: true
        },
        errors: {
          [fieldName]: 'Reqired'
        }
      }
    };
    const wrapper = shallow(<InputField {...props} />); /* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });
});
