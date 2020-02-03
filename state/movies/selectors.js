export const isTrendingMoviesLoading = (state) => state.trendingMovies.trendingList.loading;

export const trendingMoviesList = (state) => state.trendingMovies.trendingList.list;

export const trendingMoviesTotalPages = (state) => state.trendingMovies.trendingList.totalPages || 0;

export const trendingMoviesError = (state) => state.trendingMovies.trendingList.error || '';
