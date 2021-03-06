import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import WatchlistComponent from './component';
import {
  fetchWatchlist as fetchWatchlistAction,
  toggleToWatchlist as toggleToWatchlistAction
} from '../../../state/watchlist/actions';
import {
  isWatchlistLoading,
  watchlistTotalItems,
  watchlistCurrentPage,
  watchlistError,
  watchlistList
} from '../../../state/watchlist/selectors';

const WatchlistContainer = ({
  list,
  loading,
  error,
  totalItems,
  currentPage,
  fetchWatchlist,
  toggleToWatchlist
}) => (
  <WatchlistComponent
    list={list}
    loading={loading}
    error={error}
    totalItems={totalItems}
    currentPage={currentPage}
    fetchList={fetchWatchlist}
    removeModalAction={toggleToWatchlist}
  />
);

WatchlistContainer.propTypes = {
  fetchWatchlist: PropTypes.func.isRequired,
  toggleToWatchlist: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.object),
  totalItems: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired
};
WatchlistContainer.defaultProps = {
  list: null
};

const mapDispatchToPtops = {
  fetchWatchlist: fetchWatchlistAction,
  toggleToWatchlist: toggleToWatchlistAction
};

const mapStateToProps = (state) => ({
  loading: isWatchlistLoading(state),
  list: watchlistList(state),
  error: watchlistError(state),
  totalItems: watchlistTotalItems(state),
  currentPage: watchlistCurrentPage(state)
});

export default connect(mapStateToProps, mapDispatchToPtops)(WatchlistContainer);
