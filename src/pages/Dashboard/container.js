import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Dashboard from './component';
import {
  isDashboardMoviesLoading,
  dashboardMoviesList,
  dashboardMoviesError,
  dashboardMoviesTotalPages,
  dashboardMoviesCurrentPage,
  dashboardMoviesSearchQuery
} from '../../../state/dashboard/selectors';
import {
  fetchTrendingMovies,
  searchMovies as searchMoviesAction
} from '../../../state/dashboard/actions';

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.checkSearchState = this.checkSearchState.bind(this);
  }

  componentDidMount() {
    const { fetchMovies } = this.props;
    fetchMovies();
  }

  checkSearchState(page) {
    const { searchQuery, fetchMovies, searchMovies } = this.props;
    if (searchQuery) {
      return searchMovies(searchQuery, page);
    }
    return fetchMovies(page);
  }

  render() {
    const {
      list,
      loading,
      error,
      totalItems,
      currentPage
    } = this.props;

    return (
      <Dashboard
        list={list}
        loading={loading}
        error={error}
        totalItems={totalItems}
        fetchMovies={this.checkSearchState}
        currentPage={currentPage}
      />
    );
  }
}

DashboardPage.propTypes = {
  fetchMovies: PropTypes.func,
  searchMovies: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  searchQuery: PropTypes.string.isRequired,
  totalItems: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired
};
DashboardPage.defaultProps = {
  list: null,
  fetchMovies: null,
  searchMovies: null
};

const mapDispatchToPtops = {
  fetchMovies: fetchTrendingMovies,
  searchMovies: searchMoviesAction
};

const mapStateToProps = (state) => ({
  loading: isDashboardMoviesLoading(state),
  list: dashboardMoviesList(state),
  error: dashboardMoviesError(state),
  totalItems: dashboardMoviesTotalPages(state),
  currentPage: dashboardMoviesCurrentPage(state),
  searchQuery: dashboardMoviesSearchQuery(state)
});

export default connect(mapStateToProps, mapDispatchToPtops)(DashboardPage);
