import {
  getSessionId,
  isUserLoggedIn,
  username as usernameSelector
} from '../selectors';

describe('Movie selectors.', () => {
  const sessionId = '1q2w3e4r5t';
  const username = 'mock-name';
  const state = {
    session: {
      sessionId,
      username
    }
  };

  it('getSessionId() returns sesion id', () => {
    expect(getSessionId(state)).toEqual(sessionId);
  });

  it('isUserLoggedIn() converts sessionId to bool type and returns it', () => {
    expect(isUserLoggedIn(state)).toBeTruthy();
  });

  it('username() returns username', () => {
    expect(usernameSelector(state)).toEqual(username);
  });
});
