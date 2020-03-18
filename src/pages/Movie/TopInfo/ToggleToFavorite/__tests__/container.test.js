import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import ConnectedToggleToFavorite from '../container';
import { toggleToFavorite } from '../../../../../../state/favorites/actions';

jest.mock('../../../../../../state/favorites/actions', () => ({
  toggleToFavorite: jest.fn()
}));

describe('ToggleToFavorite container', () => {
  const store = configureStore()({});
  const props = {
    store,
    id: 1,
    favorite: false
  };
  store.dispatch = jest.fn();
  const wrapper = shallow(<ConnectedToggleToFavorite {...props} />); /* eslint-disable-line */
  const container = wrapper.dive();
  const instance = container.instance();

  it('matches snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  it('changeFavoriteStatus() trigger toggleToFavorite()', () => {
    const {
      id,
      favorite
    } = props;
    const updatedStatus = !favorite;
    instance.changeFavoriteStatus();

    expect(toggleToFavorite).toHaveBeenCalledWith(id, updatedStatus);
  });
});
