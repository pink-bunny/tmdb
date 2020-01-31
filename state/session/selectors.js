export const isUserLoggedIn = (state) => state.sessionReducer.sessionId || '';
export const username = (state) => state.sessionReducer.username || '';
