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
    details ? (
      <>
        <Carousel backdrops={details.backdrops} />

        <div className="top-margin">
          <TopInfo details={details} />

          <Cast cast={details.cast} />

          <Crew crew={details.crew} />
        </div>
      </>
    ) : null
  );
};

MovieComponent.propTypes = {
  details: PropTypes.shape({
    backdrops: PropTypes.arrayOf(PropTypes.object).isRequired,
    cast: PropTypes.arrayOf(PropTypes.object).isRequired,
    crew: PropTypes.arrayOf(PropTypes.object).isRequired
  }),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

MovieComponent.defaultProps = {
  details: null,
  error: ''
};

export default MovieComponent;
