import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Pagination,
  Empty,
  Typography,
  Spin
} from 'antd';

import Movie from './MovieItem';

const List = ({
  list,
  loading,
  error,
  totalItems,
  fetchMovies,
  currentPage
}) => {
  if (loading) {
    return (
      <Row type="flex" justify="center">
        <Col>
          <Spin />
        </Col>
      </Row>
    );
  }

  if (error) {
    return (
      <Row type="flex" justify="center">
        <Col>
          <Typography.Paragraph type="danger">
            {error}
          </Typography.Paragraph>
        </Col>
      </Row>
    );
  }

  if (!list) {
    return (
      <Empty
        description="No movies found"
        image={Empty.PRESENTED_IMAGE_SIMPLE}
      />
    );
  }

  return (
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
      {totalItems > 20 ? (
        <Row
          type="flex"
          justify="center"
        >
          <Col>
            <Pagination
              current={currentPage}
              pageSize={20}
              total={totalItems}
              className="pagination"
              onChange={fetchMovies}
            />
          </Col>
        </Row>
      ) : (
        null
      )}
    </>
  );
};

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  totalItems: PropTypes.number.isRequired,
  fetchMovies: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default List;
