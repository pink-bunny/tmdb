import { combineReducers } from 'redux';
import data from '../data/reducer';
import session from '../session/reducer';
import dashboard from '../dashboard/reducer';
import myLists from '../my_lists/reducer';
import movie from '../movie/reducer';
import watchlist from '../watchlist/reducer';

const reducer = combineReducers({
  data,
  session,
  dashboard,
  myLists,
  movie,
  watchlist
});

export default reducer;
