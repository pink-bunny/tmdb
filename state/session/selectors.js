export const isUserLoggedIn = (state) => state.session.sessionId || '';
export const username = (state) => state.session.username || '';
