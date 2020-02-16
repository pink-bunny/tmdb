import React from 'react';
import { shallow } from 'enzyme';

import Search from '../index';

describe('Search component matches snapshot', () => {
  const fieldName = 'searchField';
  const requiredProps = {
    onSearch: jest.fn(),
    field: { name: fieldName },
    form: {
      touched: {},
      errors: {}
    }
  };

  it('with required props', () => {
    const wrapper = shallow(<Search {...requiredProps} />); /* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });

  it('with custom props', () => {
    const props = {
      ...requiredProps,
      enterButton: 'Search',
      placeholder: 'Enter movie name'
    };
    const wrapper = shallow(<Search {...props} />); /* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });

  it('when field is touched and has error', () => {
    const props = {
      ...requiredProps,
      form: {
        touched: { [fieldName]: true },
        errors: { [fieldName]: 'Search field can\'t be empty' }
      }
    };
    const wrapper = shallow(<Search {...props} />); /* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });
});
