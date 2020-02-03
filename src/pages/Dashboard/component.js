import React from 'react';
import PropTypes from 'prop-types';

import { Layout } from 'antd';
import Search from './Search';
import List from './List';

const Dashboard = ({ list, loading, error }) => (
  <Layout>
    <Layout.Content>
      <Search />

      <div className="top-margin">
        <List list={list} error={error} loading={loading} />
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
