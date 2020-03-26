import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Row, Col, Card, Typography, Spin, Empty
} from 'antd';

import DeleteListModal from '../DeleteListModal';

const List = ({
  list,
  loading,
  error
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
      <Empty description="No results" />
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
              sm={{ span: 8 }}
              md={{ span: 6 }}
              lg={{ span: 4 }}
              xl={{ span: 4 }}
            >
              <Card
                className="top-margin"
                actions={[
                  <DeleteListModal
                    id={item.id}
                    name={item.name}
                    key="delete"
                  />
                ]}
              >
                <Typography.Title level={4}>
                  <Link to={`/my-lists/${item.id}`}>
                    {item.name}
                  </Link>
                </Typography.Title>
                {item.description}
              </Card>
            </Col>
          ))}
        </Col>
      </Row>
    </>
  );
};

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired
};

List.defaultProps = {
  list: null
};

export default List;
