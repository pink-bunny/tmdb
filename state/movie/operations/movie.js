import { createLogic } from 'redux-logic';
import { normalize, schema } from 'normalizr';

import { FETCH_MOVIE } from '../types';
import { fetchMovieSuccess, fetchMovieError } from '../actions';
import { mergeMoviesList } from '../../data/actions';

const movieLogic = createLogic({
  type: FETCH_MOVIE,
  warnTimeout: 0,

  async process({ httpClient, action }, dispatch, done) {
    const { id } = action;

    try {
      const { data: movieInfo } = await httpClient.get(`movie/${id}`);
      const { data: movieImages } = await httpClient.get(`movie/${id}/images`);
      const { data: movieCredits } = await httpClient.get(`movie/${id}/credits`);

      const data = { ...movieInfo, ...movieImages, ...movieCredits };

      // normalize movieInfo
      const movieInfoSchema = new schema.Entity('movie');
      const normalizedInfo = normalize(data, movieInfoSchema);
      const { movie } = normalizedInfo.entities;

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
