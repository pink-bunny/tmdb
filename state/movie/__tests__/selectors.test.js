import {
  isMovieLoading,
  movieError,
  movieDetails
} from '../selectors';

describe('Movie selectors.', () => {
  const error = 'Mock error';
  const state = {
    movie: {
      loading: false,
      error,
      id: 1
    },
    data: {
      movies: {
        1: { id: 1, title: 'First mock title' },
        2: { id: 2, title: 'Second mock title' }
      }
    }
  };

  it('isMovieLoading() returns loading status', () => {
    expect(isMovieLoading(state)).toBeFalsy();
  });

  it('movieError() returns error', () => {
    expect(movieError(state)).toEqual(error);
  });

  describe('movieDetails()', () => {
    it('returns movie object', () => {
      const expectedResult = { id: 1, title: 'First mock title' };
      expect(movieDetails(state)).toEqual(expectedResult);
    });

    it('does not have movie id and returns null', () => {
      const emptyMovieState = {
        movie: {},
        data: {}
      };
      expect(movieDetails(emptyMovieState)).toBeNull();
    });
  });
});
