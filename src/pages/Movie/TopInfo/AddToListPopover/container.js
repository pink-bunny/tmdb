import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  fetchMyLists as fetchMyListsAction,
  toggleToList as toggleToListAction
} from '../../../../../state/my_lists/actions';
import {
  myListsList
} from '../../../../../state/my_lists/selectors';
import AddToListComponent from './component';

class AddToListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popoverVisible: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const prevVisibleStatus = prevState.popoverVisible;
    const currentVisibleStatus = !prevVisibleStatus;
    const { fetchMyLists } = this.props;
    if (currentVisibleStatus) {
      fetchMyLists();
    }
  }

  handleVisiblePopover = (visible) => {
    this.setState({ popoverVisible: visible });
  }

  addToList = (listId) => {
    const { toggleToList, movieId } = this.props;
    toggleToList(listId, movieId);
  }

  render() {
    const { list } = this.props;
    const { popoverVisible } = this.state;

    return (
      <AddToListComponent
        addToList={this.addToList}
        list={list}
        handleVisible={this.handleVisiblePopover}
        popoverVisible={popoverVisible}
      />
    );
  }
}

AddToListContainer.propTypes = {
  toggleToList: PropTypes.func.isRequired,
  movieId: PropTypes.number.isRequired,
  fetchMyLists: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.object)
};

AddToListContainer.defaultProps = {
  list: null
};

const mapDispatchToPtops = {
  fetchMyLists: fetchMyListsAction,
  toggleToList: toggleToListAction
};

const mapStateToProps = (state) => ({
  list: myListsList(state)
});

export default connect(mapStateToProps, mapDispatchToPtops)(AddToListContainer);
