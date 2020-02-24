import React from 'react';
import {
  Row,
  Col,
  Typography,
  Card
} from 'antd';
import PropTypes from 'prop-types';

const Cast = ({ cast }) => (
  <>
    <Row>
      <Col
        span={10}
        offset={2}
        className="top-margin"
      >
        <Typography.Title level={3}>Casts</Typography.Title>
      </Col>
    </Row>
    <Row
      gutter={8}
      type="flex"
    >
      <Col
        span={20}
        offset={2}
      >
        {cast.map((item) => (
          <Col
            key={item.name}
            xs={{ span: 12 }}
            sm={{ span: 8 }}
            md={{ span: 6 }}
            lg={{ span: 4 }}
            xl={{ span: 4 }}
          >
            <Card
              cover={(
                item.profile_path ? (
                  <div
                    style={{
                      backgroundImage: `url(http://image.tmdb.org/t/p/original${item.profile_path})`
                    }}
                    className="detailed-movie__card-img"
                  />
                ) : (
                  <div className="detailed-movie__card-img" />
                )
              )}
              className="detailed-movie__card top-margin"
            >
              <Card.Meta
                title={item.name}
                description={item.character}
              />
            </Card>
          </Col>
        ))}
      </Col>
    </Row>
  </>
);

Cast.propTypes = {
  cast: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Cast;
