import React from 'react';
import {
  Row, Col, Card, Typography, Icon, Pagination
} from 'antd';

const List = () => (
  <>
    <Row
      gutter={8}
      type="flex"
    >
      <Col
        span={20}
        offset={2}
      >
        <Col
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
              List name
            </Typography.Title>
            Description
          </Card>
        </Col>
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
);

export default List;
