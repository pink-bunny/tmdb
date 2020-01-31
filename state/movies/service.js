import { createLogic } from 'redux-logic';

import { FETCH_TRANDING_MOVIES } from './types';
import { fetchTrendingMoviesSuccess, fetchTrendingMoviesError } from './actions';

const fetchTrendingMoviesLogic = createLogic({
  type: FETCH_TRANDING_MOVIES,
  warnTimeout: 0,

  async process({ httpClient }, dispatch, done) {
    try {
      const { data } = await httpClient.get('trending/movie/day?page=5');
      console.log('DATA', data);
      dispatch(fetchTrendingMoviesSuccess(data.results));
      /* eslint-disable-next-line */
    } catch (error) {
      /* eslint-disable-next-line */
      console.log('ERR fetchTrendingMoviesLogic', error);
      dispatch(fetchTrendingMoviesError());
    }
    done();
  }
});

export default fetchTrendingMoviesLogic;
