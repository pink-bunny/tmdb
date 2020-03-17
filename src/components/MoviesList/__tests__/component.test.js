import React from 'react';
import { shallow } from 'enzyme';

import MoviesList from '../component';

describe('MoviesList component', () => {
  const requiredProps = {
    loading: false,
    error: '',
    totalItems: 0,
    onPaginationClick: jest.fn(),
    currentPage: 0,
    emptyListTxt: 'No movies found'
  };
  const listArr = [{
    id: 1,
    title: 'Terminator: Dark Fate',
    overview: 'Decades after Sarah Connor prevented Judgment Day.',
    poster_path: '/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg' /* eslint-disable-line */
  }];

  it('matches snapshot when it is loading', () => {
    const props = {
      ...requiredProps,
      loading: true
    };
    const wrapper = shallow(<MoviesList {...props} />); /* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot when it has error', () => {
    const props = {
      ...requiredProps,
      error: 'Loading error'
    };
    const wrapper = shallow(<MoviesList {...props} />); /* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot with empty list', () => {
    const props = {
      ...requiredProps,
      list: null
    };
    const wrapper = shallow(<MoviesList {...props} />); /* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot with list and without pagination', () => {
    const props = {
      ...requiredProps,
      list: listArr
    };
    const wrapper = shallow(<MoviesList {...props} />); /* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot with list and pagination', () => {
    const props = {
      ...requiredProps,
      list: listArr,
      currentPage: 1,
      totalItems: 21
    };
    const wrapper = shallow(<MoviesList {...props} />); /* eslint-disable-line */

    expect(wrapper).toMatchSnapshot();
  });
});
