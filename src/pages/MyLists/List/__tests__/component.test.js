import React from 'react';
import { shallow } from 'enzyme';

import List from '../component';

describe('List component', () => {
  const requiredProps = {
    loading: false,
    error: ''
  };

  it('matches snapshot when it is loading', () => {
    const props = {
      ...requiredProps,
      loading: true
    };
    const wrapper = shallow(<List {...props} />); /* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot when it has error', () => {
    const props = {
      ...requiredProps,
      error: 'Loading error'
    };
    const wrapper = shallow(<List {...props} />); /* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot with empty list', () => {
    const wrapper = shallow(<List {...requiredProps} />); /* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot with list', () => {
    const props = {
      ...requiredProps,
      list: [{
        id: 1,
        name: 'My favorites movies',
        description: 'Description of my favorites movies'
      }]
    };
    const wrapper = shallow(<List {...props} />); /* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });
});
