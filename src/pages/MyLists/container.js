import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MyLists from './component';
import {
  createMyList as createMyListAction
} from '../../../state/my_list/actions';
import {
  fetchMyLists as fetchMyListsAction
} from '../../../state/my_lists/actions';
import {
  isMyListsLoading,
  myListsList,
  myListsListError
} from '../../../state/my_lists/selectors';

class MyListsContainer extends React.Component {
  componentDidMount() {
    const { fetchMyLists } = this.props;
    fetchMyLists();
  }

  render() {
    const {
      list,
      loading,
      error,
      createMyList
    } = this.props;

    return (
      <MyLists
        list={list}
        loading={loading}
        error={error}
        createMyList={createMyList}
      />
    );
  }
}

MyListsContainer.propTypes = {
  fetchMyLists: PropTypes.func.isRequired,
  createMyList: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired
};

MyListsContainer.defaultProps = {
  list: null
};

const mapDispatchToPtops = {
  fetchMyLists: fetchMyListsAction,
  createMyList: createMyListAction
};

const mapStateToProps = (state) => ({
  loading: isMyListsLoading(state),
  list: myListsList(state),
  error: myListsListError(state)
});

export default connect(mapStateToProps, mapDispatchToPtops)(MyListsContainer);
