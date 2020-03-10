import { createLogic } from 'redux-logic';

import normalizedMovies from '../../../utils/normalize/movies';
import { FETCH_TRENDING_MOVIES } from '../types';
import { fetchMoviesSuccess, fetchMoviesError } from '../actions';
import { mergeMoviesList } from '../../data/actions';

const trendingMoviesLogic = createLogic({
  type: FETCH_TRENDING_MOVIES,

  async process({ httpClient, action }, dispatch, done) {
    const { page } = action;
    const currentPage = page;
    try {
      const { data } = await httpClient.get(`trending/movie/day?page=${page}`);

      // normalized data
      const { movies, ids, totalItems } = normalizedMovies(data);

      dispatch(mergeMoviesList(movies));
      dispatch(fetchMoviesSuccess(ids, totalItems, currentPage));
    } catch (error) {
      const errorMessage = error.response.data.status_message;
      dispatch(fetchMoviesError(errorMessage));
    }
    done();
  }
});

export default trendingMoviesLogic;
