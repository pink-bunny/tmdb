export const isTrendingMoviesLoading = (state) => state.dashboard.loading;

export const trendingMoviesList = (state) => {
  const refs = state.dashboard.ids;
  const list = state.data.movies;

  return refs.map((item) => list[item]);
};

export const trendingMoviesTotalPages = (state) => (
  state.dashboard.totalItems
);

export const trendingMoviesCurrentPage = (state) => (
  state.dashboard.currentPage
);

export const trendingMoviesError = (state) => state.dashboard.error;
