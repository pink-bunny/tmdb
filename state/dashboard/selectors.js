export const isDashboardMoviesLoading = (state) => state.dashboard.loading;

export const dashboardMoviesList = (state) => {
  const refs = state.dashboard.ids;
  const list = state.data.movies;

  if (refs.length === 0) {
    return null;
  }
  return refs.map((item) => list[item]);
};

export const dashboardMoviesTotalPages = (state) => (
  state.dashboard.totalItems
);

export const dashboardMoviesCurrentPage = (state) => (
  state.dashboard.currentPage
);

export const dashboardMoviesError = (state) => state.dashboard.error;

export const dashboardMoviesSearchQuery = (state) => state.dashboard.searchQuery;
