import React from 'react';
import {
  Layout, Row, Col, Typography, Icon
} from 'antd';

import List from './List';

const MyLists = () => (
  <Layout>
    <Layout.Content>
      <Row>
        <Col offset={2} span={20}>
          <div className="top-margin">
            <Typography.Title>
              My Lists
              {' '}
              <Icon type="plus-circle" />
            </Typography.Title>
          </div>
        </Col>
      </Row>

      <List />
    </Layout.Content>
  </Layout>
);

export default MyLists;
