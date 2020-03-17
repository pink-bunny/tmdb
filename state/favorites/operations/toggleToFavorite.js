import { createLogic } from 'redux-logic';

import needRefetchListCalculation from '../../../utils/needRefetchListCalculation';
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

      needRefetchListCalculation({
        dispatch,
        refetchFunc: fetchFavorites,
        needRefetch: needRefetchList,
        totalItems: favoritesTotalItems(state),
        currentPage: favoritesCurrentPage(state)
      });
    } catch (error) {} /* eslint-disable-line no-empty */
    done();
  }
});

export default toggleToFavoritesLogic;
