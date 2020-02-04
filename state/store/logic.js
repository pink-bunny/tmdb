import sessionService from '../session/operations';
import dashboardService from '../dashboard/operations';

export default [
  ...sessionService,
  ...dashboardService
];
