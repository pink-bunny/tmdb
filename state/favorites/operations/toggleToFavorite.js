import { createLogic } from 'redux-logic';

import { getSessionId } from '../../session/selectors';
import {
  favoritesTotalItems,
  favoritesCurrentPage
} from '../selectors';
import { TOGGLE_TO_FAVORITES } from '../types';
import {
  fetchFavorites,
  toggleToFavoriteSuccess
} from '../actions';

const toggleToFavoritesLogic = createLogic({
  type: TOGGLE_TO_FAVORITES,

  async process({ getState, httpClient, action }, dispatch, done) {
    const { favorite, id, needRefetchList } = action;
    const state = getState();
    const sessionId = getSessionId(state);

    try {
      await httpClient.post(`/account/{account_id}/favorite?session_id=${sessionId}`, {
        media_type: 'movie', /* eslint-disable-line camelcase */
        media_id: id, /* eslint-disable-line camelcase */
        favorite
      });

      dispatch(toggleToFavoriteSuccess(id, favorite));

      if (needRefetchList) {
        const totalItems = favoritesTotalItems(state);
        const currentPage = favoritesCurrentPage(state);
        const itemsPerPage = 20;
        const totalPages = Math.ceil(totalItems / itemsPerPage);

        const singleItemOnTheLastPage = totalItems % itemsPerPage === 1;
        const notSinglePage = currentPage !== 1;
        const isLastPage = currentPage === totalPages;
        const previousPage = currentPage - 1;

        if (notSinglePage && isLastPage && singleItemOnTheLastPage) {
          dispatch(fetchFavorites(previousPage));
        } else {
          dispatch(fetchFavorites(currentPage));
        }
      }
    } catch (error) {} /* eslint-disable-line no-empty */
    done();
  }
});

export default toggleToFavoritesLogic;
