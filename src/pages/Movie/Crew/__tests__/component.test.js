import React from 'react';
import { shallow } from 'enzyme';

import Crew from '../component';

describe('Crew component', () => {
  it('matches snapshot with required props', () => {
    const requiredProps = {
      crew: [{
        credit_id: 1, /* eslint-disable-line camelcase */
        name: 'Mock name',
        character: 'Mock character',
        department: 'Mock department'
      }]
    };
    /* eslint-disable react/jsx-props-no-spreading */
    const wrapper = shallow(<Crew {...requiredProps} />);
    /* eslint-enable react/jsx-props-no-spreading */

    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot and has profile_path', () => {
    const props = {
      crew: [{
        /* eslint-disable camelcase */
        credit_id: 1,
        name: 'Mock name',
        profile_path: '/mock_path',
        /* eslint-enable camelcase */
        character: 'Mock character',
        department: 'Mock department'
      }]
    };
    /* eslint-disable react/jsx-props-no-spreading */
    const wrapper = shallow(<Crew {...props} />);
    /* eslint-enable react/jsx-props-no-spreading */

    expect(wrapper).toMatchSnapshot();
  });
});
