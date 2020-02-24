import React from 'react';
import { Row, Col, Carousel as AntdCarousel } from 'antd';
import PropTypes from 'prop-types';

const Carousel = ({ backdrops }) => (
  <Row type="flex">
    <Col span={24}>
      <AntdCarousel>
        {backdrops.map((item) => (
          <div key={item.file_path}>
            <img
              className="movie-image"
              src={`https://image.tmdb.org/t/p/original/${item.file_path}`}
              alt=""
            />
          </div>
        ))}
      </AntdCarousel>
    </Col>
  </Row>
);

Carousel.propTypes = {
  backdrops: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Carousel;
