import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import withModal from '../../../hoc/withModal';
import { toggleToWatchlist as toggleToWatchlistAction } from '../../../../state/watchlist/actions';
import RemoveFromWatchlistModalComponent from './component';

class RemoveFromWatchlistModalContainer extends React.Component {
  removeFromWatchlist = () => {
    const {
      id,
      toggleToWatchlist
    } = this.props;
    const watchlist = false;
    const needRefetchWatchlist = true;

    toggleToWatchlist(id, watchlist, needRefetchWatchlist);
  }

  render() {
    const {
      modalVisible,
      hideModal,
      showModal,
      title
    } = this.props;

    return (
      <RemoveFromWatchlistModalComponent
        modalVisible={modalVisible}
        hideModal={hideModal}
        showModal={showModal}
        title={title}
        removeFromWatchlist={this.removeFromWatchlist}
      />
    );
  }
}

RemoveFromWatchlistModalContainer.propTypes = {
  toggleToWatchlist: PropTypes.func.isRequired,
  modalVisible: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

const mapDispatchToPtops = {
  toggleToWatchlist: toggleToWatchlistAction
};

export default connect(null, mapDispatchToPtops)(withModal(RemoveFromWatchlistModalContainer));
