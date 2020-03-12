import { createLogic } from 'redux-logic';

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
    const { id, watchlist, needRefetchWatchlist } = action;
    const state = getState();
    const sessionId = getSessionId(state);

    await httpClient.post(`/account/{account_id}/watchlist?session_id=${sessionId}`, {
      media_type: 'movie', /* eslint-disable-line camelcase */
      media_id: id, /* eslint-disable-line camelcase */
      watchlist
    });

    dispatch(toggleToWatchlistSuccess(id, watchlist));

    if (needRefetchWatchlist) {
      const totalItems = watchlistTotalItems(state);
      const currentPage = watchlistCurrentPage(state);
      const itemsPerPage = 20;
      const totalPages = Math.ceil(totalItems / itemsPerPage);

      const singleItemOnTheLastPage = totalItems % itemsPerPage === 1;
      const notSinglePage = currentPage !== 1;
      const isLastPage = currentPage === totalPages;
      const previousPage = currentPage - 1;

      if (notSinglePage && isLastPage && singleItemOnTheLastPage) {
        dispatch(fetchWatchlist(previousPage));
      } else {
        dispatch(fetchWatchlist(currentPage));
      }
    }
    done();
  }
});

export default toggleToWatchlistLogic;
