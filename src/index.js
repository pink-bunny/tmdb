import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './stylesheets/application.scss';
import configureStore from '../state/store/configureStore';

import AppRoot from './components/AppRoot';

const store = configureStore();

render(
  <Provider store={store}>
    <AppRoot />
  </Provider>,
  document.getElementById('app')
);
