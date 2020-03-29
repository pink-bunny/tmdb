import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  addToList as addToListAction,
  createAndAddToList as createAndAddToListAction
} from '../../../../../state/my_list/actions';
import {
  fetchMyLists as fetchMyListsAction
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

  closePopover = () => {
    this.visiblePopover(false);
  }

  createListModalSubmit = (values, setErrors, hideModal) => {
    const { createAndAddToList, movieId } = this.props;
    createAndAddToList(values, setErrors, hideModal, movieId);
  }

  addToList = (listId) => {
    const { addToList, movieId } = this.props;
    const { closePopover } = this;
    addToList(listId, movieId, closePopover);
  }

  render() {
    const { list } = this.props;
    const { popoverVisible } = this.state;

    return (
      <AddToListComponent
        addToList={this.addToList}
        list={list}
        popoverVisible={popoverVisible}
        handleVisiblePopover={this.visiblePopover}
        closePopover={this.closePopover}
        popoverCreateListModalSubmit={this.createListModalSubmit}
      />
    );
  }
}

AddToListContainer.propTypes = {
  addToList: PropTypes.func.isRequired,
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
  addToList: addToListAction,
  createAndAddToList: createAndAddToListAction
};

const mapStateToProps = (state) => ({
  list: myListsList(state)
});

export default connect(mapStateToProps, mapDispatchToPtops)(AddToListContainer);
