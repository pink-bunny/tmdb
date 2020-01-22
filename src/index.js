import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './stylesheets/application.scss';
import configureStore from '../state/store/configureStore';
import { sessionRequestToken } from '../state/session/actions';

import AppRoot from './components/AppRoot';

const store = configureStore();
store.dispatch(sessionRequestToken());

render(
  <Provider store={store}>
    <AppRoot />
  </Provider>,
  document.getElementById('app')
);
