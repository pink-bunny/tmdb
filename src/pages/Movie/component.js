import React from 'react';
import {
  Layout,
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
      <Layout>
        <Layout.Content>
          <Row type="flex" justify="center" className="top-margin">
            <Col>
              <Spin />
            </Col>
          </Row>
        </Layout.Content>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <Layout.Content>
          <Row type="flex" justify="center" className="top-margin">
            <Col>
              <Typography.Paragraph type="danger">
                {error}
              </Typography.Paragraph>
            </Col>
          </Row>
        </Layout.Content>
      </Layout>
    );
  }

  return (
    details ? (
      <Layout>
        <Layout.Content>
          <Carousel backdrops={details.backdrops} />

          <div className="top-margin">
            <TopInfo details={details} />

            <Cast cast={details.cast} />

            <Crew crew={details.crew} />
          </div>
        </Layout.Content>
      </Layout>
    ) : null
  );
};

MovieComponent.propTypes = {
  details: PropTypes.shape({
    backdrops: PropTypes.arrayOf(PropTypes.object),
    cast: PropTypes.arrayOf(PropTypes.object),
    crew: PropTypes.arrayOf(PropTypes.object)
  }),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

MovieComponent.defaultProps = {
  details: null,
  error: ''
};

export default MovieComponent;
