import React from 'react';
import {
  Row,
  Col,
  Typography,
  Spin
} from 'antd';
import PropTypes from 'prop-types';

import Carousel from './Carousel';
import TopInfo from './TopInfo';
import Cast from './Cast';
import Crew from './Crew';

const MovieComponent = ({
  loading,
  error,
  details
}) => {
  if (loading) {
    return (
      <Row type="flex" justify="center" className="top-margin">
        <Col>
          <Spin />
        </Col>
      </Row>
    );
  }

  if (error) {
    return (
      <Row type="flex" justify="center" className="top-margin">
        <Col>
          <Typography.Paragraph type="danger">
            {error}
          </Typography.Paragraph>
        </Col>
      </Row>
    );
  }

  return (
    details && (
      <>
        <Carousel backdrops={details.backdrops} />

        <div className="top-margin">
          <TopInfo
            id={details.id}
            title={details.title}
            overview={details.overview}
            originalLanguage={details.original_language}
            runtime={details.runtime}
            budget={details.budget}
            revenue={details.revenue}
            genres={details.genres}
            isMovieInWatchlist={details.watchlist}
          />
          <Cast cast={details.cast} />
          <Crew crew={details.crew} />
        </div>
      </>
    )
  );
};

MovieComponent.propTypes = {
  details: PropTypes.shape({
    overview: PropTypes.string,
    title: PropTypes.string,
    original_language: PropTypes.string, /* eslint-disable-line */
    runtime: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.object),
    backdrops: PropTypes.arrayOf(PropTypes.object),
    cast: PropTypes.arrayOf(PropTypes.object),
    crew: PropTypes.arrayOf(PropTypes.object),
    watchlist: PropTypes.bool
  }),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

MovieComponent.defaultProps = {
  details: {
    overview: '',
    title: '',
    original_language: '', /* eslint-disable-line */
    runtime: null,
    budget: null,
    revenue: null,
    genres: null,
    backdrops: null,
    cast: null,
    crew: null,
    watchlist: null
  },
  error: ''
};

export default MovieComponent;
