import React from 'react';
import { shallow } from 'enzyme';

import List from '../component';

describe('List component matches snapshot', () => {
  const requiredProps = {
    loading: false,
    error: '',
    totalItems: 0,
    fetchMovies: jest.fn(),
    currentPage: 0
  };
  const listArr = [{
    id: 1,
    title: 'Terminator: Dark Fate',
    overview: 'Decades after Sarah Connor prevented Judgment Day.',
    poster_path: '/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg' /* eslint-disable-line */
  }];

  it('when it is loading', () => {
    const props = {
      ...requiredProps,
      loading: true
    };
    const wrapper = shallow(<List {...props} />); /* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });

  it('when it has error', () => {
    const props = {
      ...requiredProps,
      error: 'Loading error'
    };
    const wrapper = shallow(<List {...props} />); /* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });

  it('with empty list', () => {
    const props = {
      ...requiredProps,
      list: null
    };
    const wrapper = shallow(<List {...props} />); /* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });

  it('with list and without pagination', () => {
    const props = {
      ...requiredProps,
      list: listArr
    };
    const wrapper = shallow(<List {...props} />); /* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });

  it('with list and pagination', () => {
    const props = {
      ...requiredProps,
      list: listArr,
      currentPage: 1,
      totalItems: 21
    };
    const wrapper = shallow(<List {...props} />); /* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });
});
