import cookie from 'cookie_js';
import reducer from '../reducer';
import * as types from '../types';

jest.mock('cookie_js', () => ({
  get: jest.fn((key) => {
    if (key === 'sessionId') {
      return '1q2w3e4r5t';
    }
    return 'mock_name';
  })
}));
const sessionId = cookie.get('sessionId');
const username = cookie.get('username');

describe('Session reducer', () => {
  it('returns initial state', () => {
    const initialState = { sessionId, username };

    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle REQUEST_SESSION_SUCCESS', () => {
    const initialState = { sessionId: '', username: '' };
    const action = {
      type: types.REQUEST_SESSION_SUCCESS,
      sessionId: '1q2w3e4r5t',
      username: 'mock_name'
    };
    const newState = {
      ...initialState,
      sessionId: '1q2w3e4r5t',
      username: 'mock_name'
    };
    expect(reducer(initialState, action)).toEqual(newState);
  });

  it('should handle COMPLETE_SESSION_SUCCESS', () => {
    const initialState = {
      sessionId: '1q2w3e4r5t',
      username: 'mock_name'
    };
    const action = {
      type: types.COMPLETE_SESSION_SUCCESS
    };
    const newState = {
      ...initialState,
      sessionId: '',
      username: ''
    };
    expect(reducer(initialState, action)).toEqual(newState);
  });
});
