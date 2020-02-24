import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

import MovieComponent from './component';
import {
  fetchMovie as fetchMovieAction
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

  render() {
    const {
      details,
      loading,
      error
    } = this.props;

    return (
      <Layout>
        <Layout.Content>
          <MovieComponent
            details={details}
            loading={loading}
            error={error}
          />
        </Layout.Content>
      </Layout>
    );
  }
}

MovieContainer.propTypes = {
  fetchMovie: PropTypes.func.isRequired,
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
  fetchMovie: fetchMovieAction
};

export default connect(mapStateToProps, mapDispatchToPtops)(MovieContainer);
