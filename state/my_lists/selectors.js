export const isMyListsLoading = (state) => state.myLists.loading;

export const myListsList = (state) => {
  const refs = state.myLists.ids;
  const list = state.data.lists;

  return refs.map((item) => list[item]);
};

export const myListsListError = (state) => state.myLists.error;

export const deleteMyListError = (state) => state.myLists.deleteMyListError;
