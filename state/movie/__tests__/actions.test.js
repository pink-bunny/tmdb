import * as types from '../types';
import {
  fetchMovie,
  fetchMovieSuccess,
  fetchMovieError,
  toggleToWatchlist
} from '../actions';

describe('Movie actions.', () => {
  it('Fetch movie', () => {
    const id = 1;
    const expectedAction = {
      type: types.FETCH_MOVIE,
      id
    };
    expect(fetchMovie(id)).toEqual(expectedAction);
  });

  it('Success movie fetching', () => {
    const id = 1;
    const expectedAction = {
      type: types.FETCH_MOVIE_SUCCESS,
      id
    };
    expect(fetchMovieSuccess(id)).toEqual(expectedAction);
  });

  it('Fetch movie error', () => {
    const error = 'Mock error';
    const expectedAction = {
      type: types.FETCH_MOVIE_ERROR,
      error
    };
    expect(fetchMovieError(error)).toEqual(expectedAction);
  });

  it('Fetch movie error', () => {
    const id = 1;
    const watchlist = true;
    const expectedAction = {
      type: types.TOGGLE_TO_WATCHLIST,
      id,
      watchlist
    };
    expect(toggleToWatchlist(id, watchlist)).toEqual(expectedAction);
  });
});