import React from 'react';
import {
  Row,
  Col,
  Typography,
  Icon,
  Tag
} from 'antd';
import PropTypes from 'prop-types';

import ToggleToWatchlist from './ToggleToWatchlist';

const TopInfo = ({
  id,
  title,
  overview,
  originalLanguage,
  runtime,
  budget,
  revenue,
  genres,
  isMovieInWatchlist
}) => (
  <>
    <Row>
      <Col
        span={20}
        offset={2}
      >
        <Typography.Title>
          <span>
            {title}
          </span>
          {' '}
          <Icon
            type="heart"
          />
          {' '}
          <ToggleToWatchlist id={id} isMovieInWatchlist={isMovieInWatchlist} />
        </Typography.Title>

        <Typography.Title level={3}>Overview</Typography.Title>
        <Typography.Paragraph>
          {overview}
        </Typography.Paragraph>
      </Col>
    </Row>
    <Row>
      <Col
        span={20}
        offset={2}
      >
        <Typography.Paragraph>
          <b>Original Language: </b>
          <span>
            {originalLanguage}
          </span>
        </Typography.Paragraph>
      </Col>
      <Col
        span={20}
        offset={2}
      >
        <Typography.Paragraph>
          <b>Runtime: </b>
          <span>
            {runtime}
          </span>
        </Typography.Paragraph>
      </Col>
      <Col
        span={20}
        offset={2}
      >
        <Typography.Paragraph>
          <b>Budget: </b>
          <span>
            $
            {budget}
          </span>
        </Typography.Paragraph>
      </Col>
      <Col
        span={20}
        offset={2}
      >
        <Typography.Paragraph>
          <b>Revenue: </b>
          <span>
            $
            {revenue}
          </span>
        </Typography.Paragraph>
      </Col>
      <Col
        span={20}
        offset={2}
      >
        <Typography.Paragraph>
          <b>Genres: </b>
          {genres.map((item) => (
            <Tag key={item.id}>
              {item.name}
            </Tag>
          ))}
        </Typography.Paragraph>
      </Col>
    </Row>
  </>
);

TopInfo.propTypes = {
  id: PropTypes.number,
  overview: PropTypes.string,
  title: PropTypes.string,
  originalLanguage: PropTypes.string,
  runtime: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number,
  genres: PropTypes.arrayOf(PropTypes.object),
  isMovieInWatchlist: PropTypes.bool
};

TopInfo.defaultProps = {
  id: null,
  overview: '',
  title: '',
  originalLanguage: '',
  runtime: null,
  budget: null,
  revenue: null,
  genres: null,
  isMovieInWatchlist: null
};

export default TopInfo;
