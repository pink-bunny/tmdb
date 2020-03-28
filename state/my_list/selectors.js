export const isMyListLoading = (state) => state.myList.loading;

export const myListError = (state) => state.myList.error;

export const myListInfo = (state) => {
  const id = state.myList.id || null;
  const list = state.data.lists || {};

  if (!id) {
    return null;
  }
  return list[id];
};

export const myListMovies = (state) => {
  let refs = [];
  const listId = state.myList.id;
  const { lists } = state.data;
  const list = state.data.movies || {};
  if (listId) {
    refs = lists[listId].items;
  }

  if (refs.length === 0) {
    return null;
  }

  return refs.map((item) => list[item]);
};
