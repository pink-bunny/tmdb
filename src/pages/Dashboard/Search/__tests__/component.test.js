import React from 'react';
import { shallow } from 'enzyme';

import Search from '../component';

describe('Search component', () => {
  const requiredProps = {
    handleSubmit: jest.fn()
  };

  it('matches snapshot', () => {
    const wrapper = shallow(<Search {...requiredProps} />); /* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });
});
