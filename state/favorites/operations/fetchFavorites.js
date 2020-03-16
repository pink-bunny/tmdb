import { createLogic } from 'redux-logic';

import { FETCH_FAVORITES } from '../types';
import normalizedMovies from '../../../utils/normalize/movies';
import { getSessionId } from '../../session/selectors';
import { mergeMoviesList } from '../../data/actions';
import { fetchFavoritesSuccess, fetchFavoritesError } from '../actions';

const fetchFavoritesLogic = createLogic({
  type: FETCH_FAVORITES,

  async process({ getState, httpClient, action }, dispatch, done) {
    const state = getState();
    const sessionId = getSessionId(state);
    const { page } = action;
    const currentPage = page;

    try {
      const { data } = await httpClient.get(`/account/{account_id}/favorite/movies?session_id=${sessionId}&page=${page}`);
      // normalize data
      const { movies, ids, totalItems } = normalizedMovies(data);

      dispatch(mergeMoviesList(movies));
      dispatch(fetchFavoritesSuccess(ids, totalItems, currentPage));
    } catch (error) {
      const errorMessage = error.response.data.status_message;
      dispatch(fetchFavoritesError(errorMessage));
    }
    done();
  }
});

export default fetchFavoritesLogic;
