import React from 'react';
import { shallow } from 'enzyme';

import ListComponent from '../component';

describe('List component', () => {
  const requiredProps = {
    removeModalTxt: 'Mock modal text',
    listTitle: 'Mock list title',
    emptyListTxt: 'Mock empty list text',
    fetchList: jest.fn(),
    removeModalAction: jest.fn(),
    loading: true,
    error: '',
    totalItems: 21,
    currentPage: 1
  };
  const wrapper = shallow(<ListComponent {...requiredProps} />); /* eslint-disable-line react/jsx-props-no-spreading, max-len */

  it('matches snapshot with required props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot with custom props', () => {
    wrapper.setProps({
      list: [{
        id: 1,
        title: 'Terminator: Dark Fate',
        overview: 'Decades after Sarah Connor prevented Judgment Day.',
        poster_path: '/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg' /* eslint-disable-line camelcase */
      }]
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('passes actions array to <MoviesList />', () => {
    const actionsList = wrapper.find('MoviesList').renderProp('actionsList')(1, 'Mock title');
    expect(actionsList).toMatchSnapshot();
  });
});
