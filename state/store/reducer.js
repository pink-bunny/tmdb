import { combineReducers } from 'redux';
import session from '../session/reducer';
import trendingMovies from '../movies/reducer';

const reducer = combineReducers({
  session,
  trendingMovies
});

export default reducer;
