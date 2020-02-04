import { createLogic } from 'redux-logic';
import { normalize, schema } from 'normalizr';

import { FETCH_TRENDING_MOVIES } from '../types';
import { fetchTrendingMoviesSuccess, fetchTrendingMoviesError } from '../actions';
import { mergeMoviesList } from '../../data/actions';

const trendingMoviesLogic = createLogic({
  type: FETCH_TRENDING_MOVIES,
  warnTimeout: 0,

  async process({ httpClient, action }, dispatch, done) {
    const { page } = action;
    const currentPage = page;
    try {
      const { data } = await httpClient.get(`trending/movie/day?page=${page}`);
      // normalize data
      const movie = new schema.Entity('movies');
      const moviesSchema = { results: [movie] };
      const normalizedMovies = normalize(data, moviesSchema);
      const { movies } = normalizedMovies.entities;
      const ids = normalizedMovies.result.results;
      const totalItems = normalizedMovies.result.total_results;

      dispatch(mergeMoviesList(movies));
      dispatch(fetchTrendingMoviesSuccess(ids, totalItems, currentPage));
    } catch (error) {
      const errorMessage = error.response.data.status_message;
      dispatch(fetchTrendingMoviesError(errorMessage));
    }
    done();
  }
});

export default trendingMoviesLogic;
