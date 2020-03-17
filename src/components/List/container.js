import React from 'react';
import PropTypes from 'prop-types';

import ListComponent from './component';

class ListContainer extends React.Component {
  componentDidMount() {
    const { fetchList } = this.props;
    fetchList();
  }

  render() {
    const {
      listTitle,
      emptyListTxt,
      list,
      loading,
      error,
      totalItems,
      currentPage,
      fetchList,
      removeModalAction,
      removeModalTxt
    } = this.props;

    return (
      <ListComponent
        listTitle={listTitle}
        emptyListTxt={emptyListTxt}
        list={list}
        loading={loading}
        error={error}
        totalItems={totalItems}
        currentPage={currentPage}
        fetchList={fetchList}
        removeModalAction={removeModalAction}
        removeModalTxt={removeModalTxt}
      />
    );
  }
}

ListContainer.propTypes = {
  removeModalTxt: PropTypes.string.isRequired,
  listTitle: PropTypes.string.isRequired,
  emptyListTxt: PropTypes.string.isRequired,
  fetchList: PropTypes.func.isRequired,
  removeModalAction: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.object),
  totalItems: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired
};
ListContainer.defaultProps = {
  list: null
};

export default ListContainer;
