export const isMyListsLoading = (state) => state.myLists.loading;

export const myListsList = (state) => {
  const refs = state.myLists.ids;
  const list = state.data.lists;

  if (refs.length === 0) {
    return null;
  }
  return refs.map((item) => list[item]);
};

export const myListsListError = (state) => state.myLists.error;

export const myListsDeleteListError = (state) => state.myLists.deleteMyListError;
