import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout, Row, Col, Typography
} from 'antd';

import List from '../../components/List';
import RemoveFromWatchlistModal from './RemoveFromWatchlistModal';

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
        error={error}
        loading={loading}
        onPaginationClick={fetchWatchlist}
        totalItems={totalItems}
        currentPage={currentPage}
        emptyListTxt="No movies in watchlist found"
        actionsList={(id, title) => ([
          <RemoveFromWatchlistModal
            key="delete"
            id={id}
            title={title}
          />
        ])}
      />

    </Layout.Content>
  </Layout>
);

WatchlistComponent.propTypes = {
  fetchWatchlist: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.object),
  totalItems: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired
};
WatchlistComponent.defaultProps = {
  list: null
};

export default WatchlistComponent;
