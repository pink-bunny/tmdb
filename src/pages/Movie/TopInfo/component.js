import React from 'react';
import {
  Row,
  Col,
  Typography,
  Icon,
  Tag
} from 'antd';
import PropTypes from 'prop-types';

const TopInfo = ({
  title,
  overview,
  originalLanguage,
  runtime,
  budget,
  revenue,
  genres
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
          <Icon
            type="book"
          />
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
  overview: PropTypes.string,
  title: PropTypes.string,
  originalLanguage: PropTypes.string,
  runtime: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number,
  genres: PropTypes.arrayOf(PropTypes.object)
};

TopInfo.defaultProps = {
  overview: '',
  title: '',
  originalLanguage: '',
  runtime: null,
  budget: null,
  revenue: null,
  genres: null
};

export default TopInfo;
