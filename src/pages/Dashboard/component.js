import React from 'react';
import PropTypes from 'prop-types';

import { Layout } from 'antd';
import Search from './Search';
import List from './List';

const Dashboard = ({
  list,
  loading,
  error,
  totalItems,
  fetchMovies,
  currentPage
}) => (
  <Layout>
    <Layout.Content>
      <Search />

      <div className="top-margin">
        <List
          list={list}
          error={error}
          loading={loading}
          totalItems={totalItems}
          fetchMovies={fetchMovies}
          currentPage={currentPage}
        />
      </div>
    </Layout.Content>
  </Layout>
);

Dashboard.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  totalItems: PropTypes.number.isRequired,
  fetchMovies: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default Dashboard;
