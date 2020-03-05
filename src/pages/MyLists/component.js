import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout, Row, Col, Typography
} from 'antd';

import List from './List';
import CreateNewListModal from './CreateNewListModal';

const MyLists = ({
  list,
  loading,
  error
}) => (
  <Layout>
    <Layout.Content>
      <Row>
        <Col offset={2} span={20}>
          <div className="top-margin">
            <Typography.Title>
              My Lists
              {' '}
              <CreateNewListModal />
            </Typography.Title>
          </div>
        </Col>
      </Row>

      <List
        list={list}
        loading={loading}
        error={error}
      />
    </Layout.Content>
  </Layout>
);

MyLists.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired
};

MyLists.defaultProps = {
  list: null
};

export default MyLists;
