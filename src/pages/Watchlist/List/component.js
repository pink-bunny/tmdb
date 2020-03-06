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

import Movie from '../../../components/MovieItem';

const List = ({
  list,
  loading,
  error,
  totalItems,
  currentPage,
  fetchWatchlist
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
        description="No movies in watchlist found"
        image={Empty.PRESENTED_IMAGE_SIMPLE}
      />
    );
  }

  return (
    <>
      <Row
        gutter={8}
        type="flex"
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
                id={item.id}
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
              onChange={fetchWatchlist}
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
  fetchWatchlist: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  totalItems: PropTypes.number,
  currentPage: PropTypes.number
};

List.defaultProps = {
  list: null,
  error: null,
  totalItems: null,
  currentPage: null
};

export default List;
