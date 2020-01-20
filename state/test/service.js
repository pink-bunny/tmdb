import { createLogic } from 'redux-logic';
import { sayHi } from './actions';
import { SAY_HI } from './types';

const sayHiLogic = createLogic({
  type: SAY_HI,
  warnTimeout: 0,

  process(dispatch, done) {
    dispatch(sayHi());
    done();
  }
});

export default sayHiLogic;
