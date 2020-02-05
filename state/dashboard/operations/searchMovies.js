import { createLogic } from 'redux-logic';
import { normalize, schema } from 'normalizr';

import { SEARCH_MOVIES } from '../types';
import { mergeMoviesList } from '../../data/actions';
import { fetchTrendingMoviesSuccess } from '../actions';

const searchMoviesLogic = createLogic({
  type: SEARCH_MOVIES,
  warnTimeout: 0,

  async process({ httpClient, action }, dispatch, done) {
    const {
      search,
      setErrors,
      setSubmitting,
      page
    } = action;
    const currentPage = page;
    try {
      const { data } = await httpClient.get(`search/movie?query=${search}&page=${page}`);
      // normalize data
      const movie = new schema.Entity('movies');
      const moviesSchema = { results: [movie] };
      const normalizedData = normalize(data, moviesSchema);
      const { movies } = normalizedData.entities;
      const ids = normalizedData.result.results;
      const totalItems = normalizedData.result.total_results;

      dispatch(mergeMoviesList(movies));
      dispatch(fetchTrendingMoviesSuccess(ids, totalItems, currentPage));
    } catch (error) {
      console.log(error);
    }
    done();
  }
});

export default searchMoviesLogic;
