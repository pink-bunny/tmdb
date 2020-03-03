import React from 'react';
import { shallow } from 'enzyme';

import TopInfo from '../component';

describe('TopInfo component', () => {
  const requiredProps = {
    details: {
      id: 1,
      title: 'Mock title',
      original_language: 'Mock language', /* eslint-disable-line camelcase */
      budget: 1000000,
      revenue: 50000,
      genres: [{ id: 1, name: 'Mock genre' }],
      watchlist: false
    }
  };
  /* eslint-disable react/jsx-props-no-spreading */
  const wrapper = shallow(<TopInfo {...requiredProps} />);
  /* eslint-enable react/jsx-props-no-spreading */

  it('matches snapshot with required props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has optional props', () => {
    wrapper.setProps({
      details: {
        ...requiredProps.details,
        overview: 'Mock overview',
        runtime: 124
      }
    });

    expect(wrapper).toMatchSnapshot();
  });
});
