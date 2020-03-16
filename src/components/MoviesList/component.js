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

import Movie from '../MovieItem';

const MoviesList = ({
  list,
  loading,
  error,
  totalItems,
  onPaginationClick,
  currentPage,
  emptyListTxt,
  actionsList
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
        description={emptyListTxt}
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
                id={item.id}
                title={item.title}
                overview={item.overview}
                poster={item.poster_path}
                actions={actionsList(item.id, item.title)}
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
              onChange={onPaginationClick}
            />
          </Col>
        </Row>
      ) : (
        null
      )}
    </>
  );
};

MoviesList.propTypes = {
  actionsList: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  totalItems: PropTypes.number.isRequired,
  onPaginationClick: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  emptyListTxt: PropTypes.string.isRequired
};

MoviesList.defaultProps = {
  actionsList: () => [],
  list: null,
  error: null
};

export default MoviesList;
