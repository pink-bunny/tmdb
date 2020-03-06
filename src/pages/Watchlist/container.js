import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import WatchlistComponent from './component';
import { fetchWatchlist as fetchWatchlistAction } from '../../../state/watchlist/actions';
import {
  isWatchlistLoading,
  watchlistTotalItems,
  watchlistCurrentPage,
  watchlistError,
  watchlistList
} from '../../../state/watchlist/selectors';

class WatchlistContainer extends React.Component {
  componentDidMount() {
    const { fetchWatchlist } = this.props;
    fetchWatchlist();
  }

  render() {
    const {
      list,
      loading,
      error,
      totalItems,
      currentPage,
      fetchWatchlist
    } = this.props;

    return (
      <WatchlistComponent
        list={list}
        loading={loading}
        error={error}
        totalItems={totalItems}
        currentPage={currentPage}
        fetchWatchlist={fetchWatchlist}
      />
    );
  }
}

WatchlistContainer.propTypes = {
  fetchWatchlist: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.object),
  totalItems: PropTypes.number,
  currentPage: PropTypes.number
};
WatchlistContainer.defaultProps = {
  list: null,
  error: null,
  totalItems: null,
  currentPage: null
};

const mapDispatchToPtops = {
  fetchWatchlist: fetchWatchlistAction
};

const mapStateToProps = (state) => ({
  loading: isWatchlistLoading(state),
  list: watchlistList(state),
  error: watchlistError(state),
  totalItems: watchlistTotalItems(state),
  currentPage: watchlistCurrentPage(state)
});

export default connect(mapStateToProps, mapDispatchToPtops)(WatchlistContainer);
