import sessionService from '../session/operations';
import dashboardService from '../dashboard/operations';
import myLists from '../my_lists/operations';

export default [
  ...sessionService,
  ...dashboardService,
  ...myLists
];
