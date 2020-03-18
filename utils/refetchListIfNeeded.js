const refetchListIfNeeded = ({
  needRefetch,
  totalItems,
  currentPage,
  dispatch,
  refetchFunc
}) => {
  if (needRefetch) {
    const itemsPerPage = 20;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const singleItemOnTheLastPage = totalItems % itemsPerPage === 1;
    const notSinglePage = currentPage !== 1;
    const isLastPage = currentPage === totalPages;
    const previousPage = currentPage - 1;

    if (notSinglePage && isLastPage && singleItemOnTheLastPage) {
      dispatch(refetchFunc(previousPage));
    } else {
      dispatch(refetchFunc(currentPage));
    }
  }
};

export default refetchListIfNeeded;
