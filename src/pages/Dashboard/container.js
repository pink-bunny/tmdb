import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Dashboard from './component';
import { isTrendingMoviesFetcing } from '../../../state/movies/selectors';
import { fetchTrendingMovies as fetchTrendingMoviesAction } from '../../../state/movies/actions';

class DashboardPage extends React.Component {
  componentDidMount() {
    const { fetchTrendingMovies } = this.props;
    fetchTrendingMovies();
  }

  render() {
    return (
      <Dashboard isTrendingMoviesFetcing />
    );
  }
}

DashboardPage.propTypes = {
  fetchTrendingMovies: PropTypes.func.isRequired
};

const mapDispatchToPtops = {
  fetchTrendingMovies: fetchTrendingMoviesAction
};

const mapStateToProps = (state) => ({
  isTrendingMoviesFetcing
});

export default connect(mapStateToProps, mapDispatchToPtops)(DashboardPage);
