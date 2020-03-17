export const isFavoritesLoading = (state) => state.favorites.loading;

export const favoritesTotalItems = (state) => state.favorites.totalItems;

export const favoritesCurrentPage = (state) => state.favorites.currentPage;

export const favoritesError = (state) => state.favorites.error;

export const favoritesList = (state) => {
  const refs = state.favorites.ids || [];
  const list = state.data.movies || {};

  if (refs.length === 0) {
    return null;
  }
  return refs.map((item) => list[item]);
};
