import React from 'react';
import PropTypes from 'prop-types';

import {
  Layout,
  Row,
  Col,
  Spin
} from 'antd';
import Search from './Search';
import List from './List';

const Dashboard = ({ list, loading }) => (
  <Layout>
    <Layout.Content>
      <Search />

      <div className="top-margin">
        {loading ? (
          <Row type="flex" justify="center">
            <Col>
              <Spin />
            </Col>
          </Row>
        ) : (
          <List list={list} />
        )}
      </div>
    </Layout.Content>
  </Layout>
);

Dashboard.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired
};

export default Dashboard;
