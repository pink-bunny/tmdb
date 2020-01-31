import sessionService from '../session/operations';
import fetchTrendingMoviesLogic from '../movies/service';

export default [
  ...sessionService,
  fetchTrendingMoviesLogic
];
