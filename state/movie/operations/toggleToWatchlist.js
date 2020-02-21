import { createLogic } from 'redux-logic';

import { getSessionId } from '../../session/selectors';
import { TOGGLE_TO_WATCHLIST } from '../types';
import { toggleToWatchlistSuccess } from '../../data/actions';

const toggleToWatchlistLogic = createLogic({
  type: TOGGLE_TO_WATCHLIST,

  async process({ getState, httpClient, action }, dispatch, done) {
    const { id, isMovieInWatchlist } = action;
    const state = getState();
    const sessionId = getSessionId(state);
    const newStatus = !isMovieInWatchlist;

    try {
      await httpClient.post(`/account/{account_id}/watchlist?session_id=${sessionId}`, {
        media_type: 'movie', /* eslint-disable-line */
        media_id: id, /* eslint-disable-line */
        watchlist: newStatus
      });

      dispatch(toggleToWatchlistSuccess(id, newStatus));
    } catch (error) {
      const errorMessage = error.response.data.status_message;
      console.log('errorMessage', errorMessage);
      // dispatch(fetchMovieError(errorMessage));
    }
    done();
  }
});

export default toggleToWatchlistLogic;
