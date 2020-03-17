import React from 'react';
import PropTypes from 'prop-types';

import { Layout } from 'antd';
import Search from './Search';
import MoviesList from '../../components/MoviesList';

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
        <MoviesList
          list={list}
          error={error}
          loading={loading}
          onPaginationClick={fetchMovies}
          totalItems={totalItems}
          currentPage={currentPage}
          emptyListTxt="No movies found"
        />
      </div>
    </Layout.Content>
  </Layout>
);

Dashboard.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  totalItems: PropTypes.number.isRequired,
  fetchMovies: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};

Dashboard.defaultProps = {
  list: null
};

export default Dashboard;
