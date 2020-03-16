import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MovieComponent from './component';
import {
  fetchMovie as fetchMovieAction,
  clearMovieFromState as clearMovieFromStateAction
} from '../../../state/movie/actions';
import {
  isMovieLoading,
  movieError,
  movieDetails
} from '../../../state/movie/selectors';

class MovieContainer extends React.Component {
  componentDidMount() {
    const { match, fetchMovie } = this.props;
    const { movieId } = match.params;

    fetchMovie(movieId);
  }

  componentWillUnmount() {
    const { clearMovieFromState } = this.props;
    clearMovieFromState();
  }

  render() {
    const {
      details,
      loading,
      error
    } = this.props;
    return (
      <MovieComponent
        details={details}
        loading={loading}
        error={error}
      />
    );
  }
}

MovieContainer.propTypes = {
  fetchMovie: PropTypes.func.isRequired,
  clearMovieFromState: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      movieId: PropTypes.string.isRequired
    })
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  details: PropTypes.shape(),
  error: PropTypes.string
};

MovieContainer.defaultProps = {
  details: null,
  error: ''
};

const mapStateToProps = (state) => ({
  loading: isMovieLoading(state),
  details: movieDetails(state),
  error: movieError(state)
});

const mapDispatchToPtops = {
  fetchMovie: fetchMovieAction,
  clearMovieFromState: clearMovieFromStateAction
};

export default connect(mapStateToProps, mapDispatchToPtops)(MovieContainer);
