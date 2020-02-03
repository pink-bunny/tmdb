import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Dashboard from './component';
import {
  isTrendingMoviesLoading,
  trendingMoviesList,
  trendingMoviesError
} from '../../../state/movies/selectors';
import {
  fetchTrendingMovies as fetchTrendingMoviesAction
} from '../../../state/movies/actions';

class DashboardPage extends React.Component {
  componentDidMount() {
    const { fetchTrendingMovies } = this.props;
    fetchTrendingMovies();
  }

  render() {
    const { list, loading, error } = this.props;
    return (
      <Dashboard list={list} loading={loading} error={error} />
    );
  }
}

DashboardPage.propTypes = {
  fetchTrendingMovies: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired
};

const mapDispatchToPtops = {
  fetchTrendingMovies: fetchTrendingMoviesAction
};

const mapStateToProps = (state) => ({
  loading: isTrendingMoviesLoading(state),
  list: trendingMoviesList(state),
  error: trendingMoviesError(state)
});

export default connect(mapStateToProps, mapDispatchToPtops)(DashboardPage);
