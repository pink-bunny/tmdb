import { createLogic } from 'redux-logic';

import refetchListIfNeeded from '../../../utils/refetchListIfNeeded';
import { getSessionId } from '../../session/selectors';
import {
  watchlistTotalItems,
  watchlistCurrentPage
} from '../selectors';
import { TOGGLE_TO_WATCHLIST } from '../types';
import {
  fetchWatchlist,
  toggleToWatchlistSuccess
} from '../actions';

const toggleToWatchlistLogic = createLogic({
  type: TOGGLE_TO_WATCHLIST,

  async process({ getState, httpClient, action }, dispatch, done) {
    const { id, watchlist, needRefetchList } = action;
    const state = getState();
    const sessionId = getSessionId(state);

    try {
      await httpClient.post(`/account/{account_id}/watchlist?session_id=${sessionId}`, {
        media_type: 'movie', /* eslint-disable-line camelcase */
        media_id: id, /* eslint-disable-line camelcase */
        watchlist
      });

      dispatch(toggleToWatchlistSuccess(id, watchlist));

      refetchListIfNeeded({
        dispatch,
        refetchFunc: fetchWatchlist,
        needRefetch: needRefetchList,
        totalItems: watchlistTotalItems(state),
        currentPage: watchlistCurrentPage(state)
      });
    } catch (error) {} /* eslint-disable-line no-empty */
    done();
  }
});

export default toggleToWatchlistLogic;
