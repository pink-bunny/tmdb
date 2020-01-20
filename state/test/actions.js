import * as types from './types';

/* eslint-disable import/prefer-default-export */
export const sayHi = (greeting) => {
  const text = greeting || 'Hello world';
  return {
    type: types.SAY_HI,
    text
  };
};
/* eslint-enable */
