import React from 'react';
import { Row, Col, Pagination } from 'antd';

const List = () => (
  <div className="top-margin">
    <Row
      type="flex"
      gutter={16}
    >
      <Col
        span={20}
        offset={2}
      >
        Movie item
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
  </div>
);

export default List;
