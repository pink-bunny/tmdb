import React from 'react';
import { shallow } from 'enzyme';

import MovieItem from '../component';

describe('MovieItem component', () => {
  const requiredProps = {
    id: 1,
    title: 'Terminator: Dark Fate',
    overview: 'Decades after Sarah Connor prevented Judgment Day.'
  };

  it('matches snapshot with required props', () => {
    const wrapper = shallow(<MovieItem {...requiredProps} />); /* eslint-disable-line react/jsx-props-no-spreading, max-len */

    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot with poster', () => {
    const props = {
      ...requiredProps,
      poster: '/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg'
    };
    const wrapper = shallow(<MovieItem {...props} />); /* eslint-disable-line react/jsx-props-no-spreading, max-len */

    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot with actions', () => {
    const actionItem = <div>Remove item</div>;
    const props = {
      ...requiredProps,
      actions: [actionItem]
    };
    const wrapper = shallow(<MovieItem {...props} />); /* eslint-disable-line react/jsx-props-no-spreading, max-len */

    expect(wrapper).toMatchSnapshot();
  });
});
