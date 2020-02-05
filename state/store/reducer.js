import { combineReducers } from 'redux';
import data from '../data/reducer';
import session from '../session/reducer';
import dashboard from '../dashboard/reducer';

const reducer = combineReducers({
  data,
  session,
  dashboard
});

export default reducer;
