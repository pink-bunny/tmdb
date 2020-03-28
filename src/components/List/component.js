import React from 'react';
import PropTypes from 'prop-types';

import MoviesList from '../MoviesList';
import RemoveFromListModal from './RemoveFromListModal';

const ListComponent = ({
  emptyListTxt,
  list,
  loading,
  error,
  totalItems,
  currentPage,
  fetchList,
  removeModalAction,
  removeModalTxt
}) => (
  <MoviesList
    list={list}
    error={error}
    loading={loading}
    onPaginationClick={fetchList}
    totalItems={totalItems}
    currentPage={currentPage}
    emptyListTxt={emptyListTxt}
    actionsList={(id, title) => ([
      <RemoveFromListModal
        key="delete"
        id={id}
        title={title}
        removeModalAction={removeModalAction}
        removeModalTxt={removeModalTxt}
      />
    ])}
  />
);

ListComponent.propTypes = {
  emptyListTxt: PropTypes.string.isRequired,
  fetchList: PropTypes.func.isRequired,
  removeModalAction: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  removeModalTxt: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.object),
  totalItems: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired
};
ListComponent.defaultProps = {
  list: null
};

export default ListComponent;
