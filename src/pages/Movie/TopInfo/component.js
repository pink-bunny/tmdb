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

const TopInfo = ({ details }) => {
  const {
    id,
    title,
    overview,
    original_language: originalLanguage,
    runtime,
    budget,
    revenue,
    genres,
    watchlist
  } = details;

  return (
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
            <ToggleToWatchlist id={id} watchlist={watchlist} />
          </Typography.Title>
          {overview && (
            <>
              <Typography.Title level={3}>Overview</Typography.Title>
              <Typography.Paragraph>
                {overview}
              </Typography.Paragraph>
            </>
          )}
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
          {runtime && (
            <>
              <Typography.Paragraph>
                <b>Runtime: </b>
                <span>
                  {runtime}
                </span>
              </Typography.Paragraph>
            </>
          )}
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
};

TopInfo.propTypes = {
  details: PropTypes.shape({
    id: PropTypes.number.isRequired,
    overview: PropTypes.string,
    title: PropTypes.string.isRequired,
    original_language: PropTypes.string.isRequired, /* eslint-disable-line camelcase */
    runtime: PropTypes.number,
    budget: PropTypes.number.isRequired,
    revenue: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.object).isRequired,
    backdrops: PropTypes.arrayOf(PropTypes.object).isRequired,
    cast: PropTypes.arrayOf(PropTypes.object).isRequired,
    crew: PropTypes.arrayOf(PropTypes.object).isRequired,
    watchlist: PropTypes.bool.isRequired
  })
};

TopInfo.defaultProps = {
  details: {
    overview: null,
    runtime: null
  }
};

export default TopInfo;