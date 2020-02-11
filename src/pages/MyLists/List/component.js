import React from 'react';
import PropTypes from 'prop-types';
import {
  Row, Col, Card, Typography, Icon, Pagination, Spin, Empty
} from 'antd';

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

  if (list.length === 0) {
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
                hoverable
                className="top-margin"
                actions={[<Icon
                  key="delete"
                  type="delete"
                />]}
              >
                <Typography.Title level={4}>
                  {item.name}
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
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired
};

export default List;
