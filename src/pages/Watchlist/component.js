import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout, Row, Col, Typography
} from 'antd';

import List from './List';

const WatchlistComponent = ({
  list,
  loading,
  error,
  totalItems,
  currentPage,
  fetchWatchlist
}) => (
  <Layout>
    <Layout.Content>
      <Row>
        <Col
          offset={2}
          span={20}
        >
          <div className="top-margin">
            <Typography.Title>Watchlist</Typography.Title>
          </div>
        </Col>
      </Row>

      <List
        list={list}
        loading={loading}
        error={error}
        totalItems={totalItems}
        currentPage={currentPage}
        fetchWatchlist={fetchWatchlist}
      />

    </Layout.Content>
  </Layout>
);

WatchlistComponent.propTypes = {
  fetchWatchlist: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.object),
  totalItems: PropTypes.number,
  currentPage: PropTypes.number
};
WatchlistComponent.defaultProps = {
  list: null,
  error: null,
  totalItems: null,
  currentPage: null
};

export default WatchlistComponent;
