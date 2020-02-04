import { combineReducers } from 'redux';
import data from '../data/reducer';
import session from '../session/reducer';
import trendingMovies from '../movies/reducer';

const reducer = combineReducers({
  data,
  session,
  trendingMovies
});

export default reducer;
