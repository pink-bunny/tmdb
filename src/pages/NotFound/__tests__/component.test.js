import React from 'react';
import { shallow } from 'enzyme';

import NotFound from '../component';

test('NotFound component matches snapshot', () => {
  const location = {
    pathname: '/random'
  };
  const wrapper = shallow(<NotFound location={location} />); /* eslint-disable-line */

  expect(wrapper).toMatchSnapshot();
});
