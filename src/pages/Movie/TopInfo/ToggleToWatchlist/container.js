import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  toggleToWatchlist as toggleToWatchlistAction
} from '../../../../../state/movie/actions';
import ToggleToWatchlistComponent from './component';

class ToggleToWatchlistContainer extends React.Component {
  changeWatchlistStatus = () => {
    const {
      id,
      watchlist,
      toggleToWatchlist
    } = this.props;
    const updatedStatus = !watchlist;

    toggleToWatchlist(id, updatedStatus);
  }

  render() {
    const { watchlist } = this.props;

    return (
      <ToggleToWatchlistComponent
        changeWatchlistStatus={this.changeWatchlistStatus}
        watchlist={watchlist}
      />
    );
  }
}

const mapDispatchToProps = {
  toggleToWatchlist: toggleToWatchlistAction
};

ToggleToWatchlistContainer.propTypes = {
  id: PropTypes.number.isRequired,
  toggleToWatchlist: PropTypes.func.isRequired,
  watchlist: PropTypes.bool.isRequired
};

export default connect(null, mapDispatchToProps)(ToggleToWatchlistContainer);
