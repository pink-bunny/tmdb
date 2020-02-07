import { createLogic } from 'redux-logic';
import { normalize, schema } from 'normalizr';

import { SEARCH_MOVIES } from '../types';
import { mergeMoviesList } from '../../data/actions';
import {
  fetchMoviesSuccess,
  fetchMoviesError
} from '../actions';

const searchMoviesLogic = createLogic({
  type: SEARCH_MOVIES,
  warnTimeout: 0,

  async process({ httpClient, action }, dispatch, done) {
    const { searchQuery, page } = action;
    const currentPage = page;

    try {
      const { data } = await httpClient.get(`search/movie?query=${searchQuery}&page=${page}`);
      // normalize data
      const movie = new schema.Entity('movies');
      const moviesSchema = { results: [movie] };
      const normalizedData = normalize(data, moviesSchema);
      const { movies } = normalizedData.entities;
      const ids = normalizedData.result.results;
      const totalItems = normalizedData.result.total_results;

      dispatch(mergeMoviesList(movies));
      dispatch(fetchMoviesSuccess(ids, totalItems, currentPage));
    } catch (error) {
      const [errorMessage] = error.response.data.errors;
      dispatch(fetchMoviesError(errorMessage));
    }
    done();
  }
});

export default searchMoviesLogic;
