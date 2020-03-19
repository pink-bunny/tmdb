import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  fetchMyLists as fetchMyListsAction,
  toggleToList as toggleToListAction,
  createAndAddToList as createAndAddToListAction
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
    const { fetchMyLists } = this.props;
    const { popoverVisible } = this.state;

    if (!prevVisibleStatus && popoverVisible !== prevVisibleStatus) {
      fetchMyLists();
    }
  }

  visiblePopover = (visible) => {
    this.setState({ popoverVisible: visible });
  }

  createListModalSubmit = (values, setErrors, hideModal) => {
    const { createAndAddToList, movieId } = this.props;
    createAndAddToList(values, setErrors, hideModal, movieId);
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
        handleVisiblePopover={this.visiblePopover}
        popoverVisible={popoverVisible}
        popoverCreateListModalSubmit={this.createListModalSubmit}
      />
    );
  }
}

AddToListContainer.propTypes = {
  toggleToList: PropTypes.func.isRequired,
  createAndAddToList: PropTypes.func.isRequired,
  movieId: PropTypes.number.isRequired,
  fetchMyLists: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.object)
};

AddToListContainer.defaultProps = {
  list: null
};

const mapDispatchToPtops = {
  fetchMyLists: fetchMyListsAction,
  toggleToList: toggleToListAction,
  createAndAddToList: createAndAddToListAction
};

const mapStateToProps = (state) => ({
  list: myListsList(state)
});

export default connect(mapStateToProps, mapDispatchToPtops)(AddToListContainer);
