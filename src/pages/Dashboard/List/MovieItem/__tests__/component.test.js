import React from 'react';
import { shallow } from 'enzyme';

import MovieItem from '../component';

describe('MovieItem component', () => {
  const requiredProps = {
    title: 'Terminator: Dark Fate',
    overview: 'Decades after Sarah Connor prevented Judgment Day.'
  };

  it('matches snapshot with required props', () => {
    const wrapper = shallow(<MovieItem {...requiredProps} />); /* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot with poster', () => {
    const props = {
      ...requiredProps,
      poster: '/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg' /* eslint-disable-line */
    };
    const wrapper = shallow(<MovieItem {...props} />); /* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });
});
