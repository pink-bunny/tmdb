import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import List from '../../components/List';
import {
  fetchMyList as fetchMyListAction
} from '../../../state/my_list/actions';
import {
  isMyListLoading,
  myListError,
  myListInfo,
  myListMovies
} from '../../../state/my_list/selectors';

class MyListContainer extends React.Component {
  handleFetchList = () => {
    const { match, fetchMyList } = this.props;
    const { listId } = match.params;

    fetchMyList(listId);
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
      <List
        listTitle={listInfo ? listInfo.name : ''}
        emptyListTxt={`No movies in ${listInfo && listInfo.name} found`}
        list={listMovies}
        loading={loading}
        error={error}
        totalItems={totalItems}
        currentPage={currentPage}
        fetchList={this.handleFetchList}
        removeModalAction={() => {}}
        removeModalTxt={`Do you want to delete this item from the ${listInfo && listInfo.name}?`}
      />
    );
  }
}

MyListContainer.propTypes = {
  fetchMyList: PropTypes.func.isRequired,
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
  fetchMyList: fetchMyListAction
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
