import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Dashboard from './component';
import {
  isTrendingMoviesLoading,
  trendingMoviesList,
  trendingMoviesError,
  trendingMoviesTotalPages,
  trendingMoviesCurrentPage
} from '../../../state/dashboard/selectors';
import { fetchTrendingMovies } from '../../../state/dashboard/actions';

class DashboardPage extends React.Component {
  componentDidMount() {
    const { fetchMovies } = this.props;
    fetchMovies();
  }

  render() {
    const {
      list,
      loading,
      error,
      totalItems,
      fetchMovies,
      currentPage
    } = this.props;

    return (
      <Dashboard
        list={list}
        loading={loading}
        error={error}
        totalItems={totalItems}
        fetchMovies={fetchMovies}
        currentPage={currentPage}
      />
    );
  }
}

DashboardPage.propTypes = {
  fetchMovies: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  totalItems: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired
};

const mapDispatchToPtops = {
  fetchMovies: fetchTrendingMovies
};

const mapStateToProps = (state) => ({
  loading: isTrendingMoviesLoading(state),
  list: trendingMoviesList(state),
  error: trendingMoviesError(state),
  totalItems: trendingMoviesTotalPages(state),
  currentPage: trendingMoviesCurrentPage(state)
});

export default connect(mapStateToProps, mapDispatchToPtops)(DashboardPage);
