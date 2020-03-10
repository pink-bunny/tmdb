import { createLogic } from 'redux-logic';

import normalizedMovies from '../../../utils/normalize/movies';
import { SEARCH_MOVIES } from '../types';
import { mergeMoviesList } from '../../data/actions';
import {
  fetchMoviesSuccess,
  fetchMoviesError
} from '../actions';

const searchMoviesLogic = createLogic({
  type: SEARCH_MOVIES,

  async process({ httpClient, action }, dispatch, done) {
    const { searchQuery, page } = action;
    const currentPage = page;

    try {
      const { data } = await httpClient.get(`search/movie?query=${searchQuery}&page=${page}`);
      // normalized data
      const { movies, ids, totalItems } = normalizedMovies(data);

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
