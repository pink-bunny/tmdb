export const isTrendingMoviesLoading = (state) => state.trendingMovies.trendingList.loading;

export const trendingMoviesList = (state) => state.trendingMovies.trendingList.list;

export const trendingMoviesError = (state) => state.trendingMovies.trendingList.error || '';
