import React from 'react';
import { shallow } from 'enzyme';

import Cast from '../component';

describe('Cast component', () => {
  it('matches snapshot with required props', () => {
    const requiredProps = {
      cast: [{
        name: 'Mock name',
        character: 'Mock character'
      }]
    };
    /* eslint-disable react/jsx-props-no-spreading */
    const wrapper = shallow(<Cast {...requiredProps} />);
    /* eslint-enable react/jsx-props-no-spreading */

    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot and has profile_path', () => {
    const props = {
      cast: [{
        name: 'Mock name',
        character: 'Mock character',
        profile_path: '/mock_path' /* eslint-disable-line camelcase */
      }]
    };
    /* eslint-disable react/jsx-props-no-spreading */
    const wrapper = shallow(<Cast {...props} />);
    /* eslint-enable react/jsx-props-no-spreading */

    expect(wrapper).toMatchSnapshot();
  });
});
