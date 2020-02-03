import React from 'react';
import PropTypes from 'prop-types';

import { Layout } from 'antd';
import Search from './Search';
import List from './List';

const Dashboard = ({
  list,
  loading,
  error,
  totalPages
}) => (
  <Layout>
    <Layout.Content>
      <Search />

      <div className="top-margin">
        <List list={list} error={error} loading={loading} totalPages={totalPages} />
      </div>
    </Layout.Content>
  </Layout>
);

Dashboard.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  totalPages: PropTypes.number.isRequired
};

export default Dashboard;
