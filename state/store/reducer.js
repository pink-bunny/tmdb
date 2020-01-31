import { combineReducers } from 'redux';
import sessionReducer from '../session/reducer';
import trendingMoviesReducer from '../movies/reducer';

const reducer = combineReducers({
  sessionReducer,
  trendingMoviesReducer
});

export default reducer;
