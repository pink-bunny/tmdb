import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Dashboard from './component';
import {
  isTrendingMoviesLoading,
  trendingMoviesList,
  trendingMoviesError,
  trendingMoviesTotalPages
} from '../../../state/movies/selectors';
import { fetchTrendingMovies } from '../../../state/movies/actions';

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
      totalPages
    } = this.props;

    return (
      <Dashboard
        list={list}
        loading={loading}
        error={error}
        totalPages={totalPages}
      />
    );
  }
}

DashboardPage.propTypes = {
  fetchMovies: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  totalPages: PropTypes.number.isRequired
};

const mapDispatchToPtops = {
  fetchMovies: fetchTrendingMovies
};

const mapStateToProps = (state) => ({
  loading: isTrendingMoviesLoading(state),
  list: trendingMoviesList(state),
  error: trendingMoviesError(state),
  totalPages: trendingMoviesTotalPages(state)
});

export default connect(mapStateToProps, mapDispatchToPtops)(DashboardPage);
