import React from 'react';
import PropTypes from 'prop-types';

import {
  Layout,
  Row,
  Col,
  Spin,
  Typography
} from 'antd';
import Search from './Search';
import List from './List';

const Dashboard = ({ list, loading, error }) => (
  <Layout>
    <Layout.Content>
      <Search />

      <div className="top-margin">
        {loading && (
          <Row type="flex" justify="center">
            <Col>
              <Spin />
            </Col>
          </Row>
        )}

        {error && (
          <Row type="flex" justify="center">
            <Col>
              <Typography.Paragraph type="danger">
                {error}
              </Typography.Paragraph>
            </Col>
          </Row>
        )}

        {!loading && !error ? <List list={list} /> : null}
      </div>
    </Layout.Content>
  </Layout>
);

Dashboard.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired
};

export default Dashboard;
