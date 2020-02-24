import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import ConnectedHeader from '../container';

describe('Header container', () => {
  const initialState = {
    session: {
      sessionId: '123456',
      username: 'John Doe'
    }
  };
  const store = configureStore()(initialState);
  const wrapper = shallow(<ConnectedHeader store={store} />).dive();

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
