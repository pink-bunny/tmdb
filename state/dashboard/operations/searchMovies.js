import { createLogic } from 'redux-logic';
import { normalize, schema } from 'normalizr';

import { SEARCH_MOVIES } from '../types';
import { mergeMoviesList } from '../../data/actions';
import {
  fetchMoviesSuccess,
  fetchMoviesError,
  setSearchMoviesQuery
} from '../actions';

const searchMoviesLogic = createLogic({
  type: SEARCH_MOVIES,
  warnTimeout: 0,

  async process({ getState, httpClient, action }, dispatch, done) {
    const { searchQuery, page } = action;
    const currentPage = page;
    const query = searchQuery || getState().dashboard.searchQuery;

    try {
      const { data } = await httpClient.get(`search/movie?query=${query}&page=${page}`);
      // normalize data
      const movie = new schema.Entity('movies');
      const moviesSchema = { results: [movie] };
      const normalizedData = normalize(data, moviesSchema);
      const movies = normalizedData.entities.movies || {};
      const ids = normalizedData.result.results || [];
      const totalItems = normalizedData.result.total_results;

      dispatch(setSearchMoviesQuery(query));
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
