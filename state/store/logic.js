import sessionService from '../session/operations';
import moviesService from '../movies/operations';

export default [
  ...sessionService,
  ...moviesService
];
