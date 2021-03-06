import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MyListComponent from './component';
import {
  fetchMyList as fetchMyListAction,
  removeFromList as removeFromListAction,
  clearListIdFromState as clearListIdFromStateAction
} from '../../../state/my_list/actions';
import {
  isMyListLoading,
  myListError,
  myListInfo,
  myListMovies
} from '../../../state/my_list/selectors';

class MyListContainer extends React.Component {
  componentWillUnmount() {
    const { clearListIdFromState } = this.props;
    clearListIdFromState();
  }

  handleFetchList = () => {
    const { match, fetchMyList } = this.props;
    const { listId } = match.params;

    fetchMyList(listId);
  }

  handleRemoveFromList = (movieId) => {
    const { match, removeFromList } = this.props;
    const { listId } = match.params;

    removeFromList(listId, movieId);
  }

  render() {
    const {
      listInfo,
      loading,
      error,
      totalItems,
      currentPage,
      listMovies
    } = this.props;
    return (
      <MyListComponent
        listInfo={listInfo}
        listMovies={listMovies}
        loading={loading}
        error={error}
        totalItems={totalItems}
        currentPage={currentPage}
        fetchList={this.handleFetchList}
        removeModalAction={this.handleRemoveFromList}
      />
    );
  }
}

MyListContainer.propTypes = {
  fetchMyList: PropTypes.func.isRequired,
  clearListIdFromState: PropTypes.func.isRequired,
  removeFromList: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  listInfo: PropTypes.objectOf(PropTypes.any),
  listMovies: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.string.isRequired,
  totalItems: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      listId: PropTypes.string.isRequired
    })
  }).isRequired
};
MyListContainer.defaultProps = {
  listInfo: null,
  listMovies: null
};

const mapDispatchToPtops = {
  fetchMyList: fetchMyListAction,
  removeFromList: removeFromListAction,
  clearListIdFromState: clearListIdFromStateAction
};

const mapStateToProps = (state) => ({
  loading: isMyListLoading(state),
  listInfo: myListInfo(state),
  listMovies: myListMovies(state),
  error: myListError(state),
  totalItems: 0,
  currentPage: 0
});

export default connect(mapStateToProps, mapDispatchToPtops)(MyListContainer);
