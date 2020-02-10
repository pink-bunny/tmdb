import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MyLists from './component';
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
      error
    } = this.props;

    return (
      <MyLists
        list={list}
        loading={loading}
        error={error}
      />
    );
  }
}

MyListsContainer.propTypes = {
  fetchMyLists: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired
};

const mapDispatchToPtops = {
  fetchMyLists: fetchMyListsAction
};

const mapStateToProps = (state) => ({
  loading: isMyListsLoading(state),
  list: myListsList(state),
  error: myListsListError(state)
});

export default connect(mapStateToProps, mapDispatchToPtops)(MyListsContainer);
