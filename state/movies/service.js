import { createLogic } from 'redux-logic';

import { FETCH_TRANDING_MOVIES } from './types';
import { fetchTrendingMoviesSuccess, fetchTrendingMoviesError } from './actions';

const fetchTrendingMoviesLogic = createLogic({
  type: FETCH_TRANDING_MOVIES,
  warnTimeout: 0,

  async process({ httpClient, action }, dispatch, done) {
    const { pageNum } = action;
    try {
      const { data } = await httpClient.get(`trending/movie/day?page=${pageNum}`);
      const list = data.results;
      dispatch(fetchTrendingMoviesSuccess(list));
    } catch (error) {
      dispatch(fetchTrendingMoviesError('Error'));
    }
    done();
  }
});

export default fetchTrendingMoviesLogic;
