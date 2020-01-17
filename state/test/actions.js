import * as types from './types';

export const sayHi = (greeting) => {
  const text = greeting || 'Hello world';
  return {
    type: types.SAY_HI,
    text
  };
};
