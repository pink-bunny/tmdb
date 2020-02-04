export const isTrendingMoviesLoading = (state) => state.trendingMovies.trendingList.loading;

export const trendingMoviesList = (state) => {
  const refs = state.trendingMovies.trendingList.ids;
  const list = state.data.movies;

  return refs.map((item) => list[item]);
};

export const trendingMoviesTotalPages = (state) => (
  state.trendingMovies.trendingList.totalItems
);

export const trendingMoviesCurrentPage = (state) => (
  state.trendingMovies.trendingList.currentPage
);

export const trendingMoviesError = (state) => state.trendingMovies.trendingList.error || '';
