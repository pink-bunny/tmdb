import { createStore, applyMiddleware, compose } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import reducer from './reducer';
import logic from './logic';

export default function configureStore() {
  const depsLogic = {};
  const logicMiddleware = createLogicMiddleware(...logic, depsLogic);
  const middlewares = [logicMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const composeEnhancers = compose(
    middlewareEnhancer,
    composeWithDevTools()
  );

  const store = createStore(reducer, undefined, composeEnhancers);

  return store;
}
