import { createLogic } from 'redux-logic';

import { FETCH_MOVIE } from '../types';
import normalizeMovie from '../../../utils/normalize/movie';
import { fetchMovieSuccess, fetchMovieError } from '../actions';
import { mergeMoviesList } from '../../data/actions';
import { getSessionId } from '../../session/selectors';

const movieLogic = createLogic({
  type: FETCH_MOVIE,

  async process({ getState, httpClient, action }, dispatch, done) {
    const { id } = action;
    const state = getState();
    const sessionId = getSessionId(state);

    try {
      const { data: movieInfo } = await httpClient.get(`movie/${id}`);
      const { data: movieImages } = await httpClient.get(`movie/${id}/images`);
      const { data: movieCredits } = await httpClient.get(`movie/${id}/credits`);
      const { data: movieStates } = await httpClient.get(`movie/${id}/account_states?session_id=${sessionId}`);

      const data = {
        ...movieInfo,
        ...movieImages,
        ...movieCredits,
        ...movieStates
      };

      // normalize data
      const { movie } = normalizeMovie(data);

      dispatch(mergeMoviesList(movie));
      dispatch(fetchMovieSuccess(id));
    } catch (error) {
      const errorMessage = error.response.data.status_message;
      dispatch(fetchMovieError(errorMessage));
    }
    done();
  }
});

export default movieLogic;
