import React from 'react';
import { shallow } from 'enzyme';

import Carousel from '../component';

describe('Carousel component', () => {
  const requiredProps = {
    backdrops: [{
      /* eslint-disable camelcase */
      file_path: 'mock_path'
      /* eslint-enable camelcase */
    }]
  };

  it('matches snapshot with required props', () => {
    /* eslint-disable react/jsx-props-no-spreading */
    const wrapper = shallow(<Carousel {...requiredProps} />);
    /* eslint-enable react/jsx-props-no-spreading */
    expect(wrapper).toMatchSnapshot();
  });
});
