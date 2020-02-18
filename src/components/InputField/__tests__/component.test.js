import React from 'react';
import { shallow } from 'enzyme';

import InputField from '../index';

describe('InputField component', () => {
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

  it('matches snapshot with required props', () => {
    const wrapper = shallow(<InputField {...requiredProps} />); /* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot with icon', () => {
    const props = {
      ...requiredProps,
      icon: 'lock'
    };
    const wrapper = shallow(<InputField {...props} />); /* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot with custom props', () => {
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

  it('matches snapshot when field is touched and has error', () => {
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
