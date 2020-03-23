import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout, Row, Col, Typography, Icon
} from 'antd';

import List from './List';
import CreateNewListModal from '../../components/CreateNewListModal';

const MyLists = ({
  list,
  loading,
  error,
  createMyList
}) => (
  <Layout>
    <Layout.Content>
      <Row>
        <Col offset={2} span={20}>
          <div className="top-margin">
            <Typography.Title>
              My Lists
              {' '}
              <CreateNewListModal
                handleSubmitList={createMyList}
                triggerComponent={Icon}
                triggerProps={{ type: 'plus-circle' }}
              />
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
  createMyList: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired
};

MyLists.defaultProps = {
  list: null
};

export default MyLists;
