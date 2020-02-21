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
      isMovieInWatchlist,
      toggleToWatchlist
    } = this.props;

    toggleToWatchlist(id, isMovieInWatchlist);
  }

  render() {
    const { isMovieInWatchlist } = this.props;

    return (
      <ToggleToWatchlistComponent
        changeWatchlistStatus={this.changeWatchlistStatus}
        isMovieInWatchlist={isMovieInWatchlist}
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
  isMovieInWatchlist: PropTypes.bool.isRequired
};

export default connect(null, mapDispatchToProps)(ToggleToWatchlistContainer);
