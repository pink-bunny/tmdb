import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Pagination,
  Empty
} from 'antd';

import Movie from './MovieItem';

const List = ({ list }) => (
  list ? (
    <>
      <Row
        type="flex"
        gutter={16}
      >
        <Col
          span={20}
          offset={2}
        >
          {list.map((item) => (
            <Col
              key={item.id}
              xs={{ span: 12 }}
              sm={{ span: 12 }}
              md={{ span: 8 }}
              lg={{ span: 6 }}
              xl={{ span: 4 }}
            >
              <Movie
                title={item.title}
                overview={item.overview}
                poster={item.poster_path}
              />
            </Col>
          ))}
        </Col>
      </Row>
      <Row
        type="flex"
        justify="center"
      >
        <Col>
          <Pagination
            defaultCurrent={1}
            total={50}
            className="pagination"
          />
        </Col>
      </Row>
    </>
  ) : (
    <Empty
      description="No movies found"
      image={Empty.PRESENTED_IMAGE_SIMPLE}
    />
  )
);

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default List;
