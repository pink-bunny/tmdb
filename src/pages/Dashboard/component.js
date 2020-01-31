import React from 'react';

import { Layout } from 'antd';
import Search from './Search';
import List from './List';

const Dashboard = ({ isTrendingMoviesFetcing }) => (
  <Layout>
    <Layout.Content>
      <Search />
      {isTrendingMoviesFetcing ? 'true' : 'false'}
      <List />
    </Layout.Content>
  </Layout>
);

export default Dashboard;
