export const isWatchlistLoading = (state) => state.watchlist.loading;

export const watchlistTotalItems = (state) => state.watchlist.totalItems;

export const watchlistCurrentPage = (state) => state.watchlist.currentPage;

export const watchlistError = (state) => state.watchlist.error;

export const watchlistList = (state) => {
  const refs = state.watchlist.ids || [];
  const list = state.data.movies || {};

  if (refs.length === 0) {
    return null;
  }
  return refs.map((item) => list[item]);
};
