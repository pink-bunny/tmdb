export const isMyListLoading = (state) => state.myList.loading;

export const myListError = (state) => state.myList.error;

export const myListInfo = (state) => {
  const id = state.myList.movieId || null;
  const list = state.data.lists || {};

  if (!id) {
    return null;
  }
  return list[id];
};

export const myListMovies = (state) => {
  const refs = state.myList.moviesIds || [];
  const list = state.data.movies || {};

  if (refs.length === 0) {
    return null;
  }
  return refs.map((item) => list[item]);
};
