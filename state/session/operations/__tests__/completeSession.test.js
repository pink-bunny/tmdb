import cookie from 'cookie_js';
import completeSessionLogic from '../completeSession';

jest.mock('cookie_js', () => ({
  remove: jest.fn()
}));

describe('completeSession logic', () => {
  const dispatch = jest.fn();
  const done = jest.fn();
  completeSessionLogic.process(undefined, dispatch, done);

  it('matches snapshot', () => {
    expect(completeSessionLogic).toMatchSnapshot();
  });

  it('removes cookie', () => {
    expect(cookie.remove).toHaveBeenCalledWith('sessionId', 'username');
  });

  it('have been called done()', () => {
    expect(done).toHaveBeenCalled();
  });
});
