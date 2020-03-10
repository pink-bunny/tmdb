import { createLogic } from 'redux-logic';

import { FETCH_WATCHLIST } from '../types';
import normalizedMovies from '../../../utils/normalize/movies';
import { getSessionId } from '../../session/selectors';
import { mergeMoviesList } from '../../data/actions';
import { fetchWatchlistSuccess, fetchWatchlistError } from '../actions';

const fetchWatchlistLogic = createLogic({
  type: FETCH_WATCHLIST,

  async process({ getState, httpClient, action }, dispatch, done) {
    const state = getState();
    const sessionId = getSessionId(state);
    const { page } = action;
    const currentPage = page;

    try {
      const { data } = await httpClient.get(`/account/{account_id}/watchlist/movies?session_id=${sessionId}&page=${page}`);
      // normalize data
      const { movies, ids, totalItems } = normalizedMovies(data);

      dispatch(mergeMoviesList(movies));
      dispatch(fetchWatchlistSuccess(ids, totalItems, currentPage));
    } catch (error) {
      const errorMessage = error.response.data.status_message;
      dispatch(fetchWatchlistError(errorMessage));
    }
    done();
  }
});

export default fetchWatchlistLogic;
