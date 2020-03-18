import React from 'react';
import { shallow } from 'enzyme';

import ToggleToFavoriteComponent from '../component';

describe('ToggleToFavorite component', () => {
  const requiredProps = {
    favorite: false,
    changeFavoriteStatus: jest.fn()
  };
  const wrapper = shallow(<ToggleToFavoriteComponent {...requiredProps} />); /* eslint-disable-line react/jsx-props-no-spreading, max-len */

  it('matches snapshot with required props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot when favorite is turned on', () => {
    wrapper.setProps({ favorite: true });

    expect(wrapper).toMatchSnapshot();
  });
});
