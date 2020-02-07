export const getSessionId = (state) => state.session.sessionId;

export const isUserLoggedIn = (state) => !!getSessionId(state);

export const username = (state) => state.session.username || '';
