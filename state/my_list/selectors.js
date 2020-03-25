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

export const deleteMyListError = (state) => state.myLists.deleteMyListError;
