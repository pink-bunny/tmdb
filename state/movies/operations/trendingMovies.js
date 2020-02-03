import { createLogic } from 'redux-logic';

import { FETCH_TRANDING_MOVIES } from '../types';
import { fetchTrendingMoviesSuccess, fetchTrendingMoviesError } from '../actions';

const trendingMoviesLogic = createLogic({
  type: FETCH_TRANDING_MOVIES,
  warnTimeout: 0,

  async process({ httpClient, action }, dispatch, done) {
    const { page } = action;
    const currentPage = page;
    try {
      const { data } = await httpClient.get(`trending/movie/day?page=${page}`);
      const list = data.results;
      const totalItems = data.total_results;
      dispatch(fetchTrendingMoviesSuccess(list, totalItems, currentPage));
    } catch (error) {
      const errorMessage = error.response.data.status_message;
      dispatch(fetchTrendingMoviesError(errorMessage));
    }
    done();
  }
});

export default trendingMoviesLogic;
