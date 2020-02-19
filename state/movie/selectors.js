export const isMovieLoading = (state) => state.movie.loading;

export const movieError = (state) => state.movie.error;

export const movieDetails = (state) => {
  const id = state.movie.id || null;
  const movie = state.data.movie || {};

  if (!id) {
    return null;
  }

  return movie[id];
};
