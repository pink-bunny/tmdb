import sessionService from '../session/operations';
import dashboardService from '../dashboard/operations';
import myLists from '../my_lists/operations';
import movie from '../movie/operations';
import watchlist from '../watchlist/operations';
import favorites from '../favorites/operations';
import myList from '../my_list/operations';

export default [
  ...sessionService,
  ...dashboardService,
  ...myLists,
  ...movie,
  ...watchlist,
  ...favorites,
  ...myList
];
