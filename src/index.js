import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './stylesheets/application.scss';
import configureStore from '../state/store/configureStore';
import { sayHi } from '../state/test/actions';

import AppRoot from './components/AppRoot';

const store = configureStore();
store.subscribe(() => console.log(store.getState()));
store.dispatch(sayHi('Hi everyone'));

render(
  <Provider store={store}>
    <AppRoot />
  </Provider>,
  document.getElementById('app')
);
