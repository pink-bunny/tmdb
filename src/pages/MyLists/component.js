import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout, Row, Col, Typography, Icon
} from 'antd';

import List from './List';
import CreateNewListForm from './CreateNewListForm';

const MyLists = ({
  list,
  loading,
  error,
  modalVisible,
  showModal,
  hideModal
}) => (
  <Layout>
    <Layout.Content>
      <Row>
        <Col offset={2} span={20}>
          <div className="top-margin">
            <Typography.Title>
              My Lists
              {' '}
              <Icon type="plus-circle" onClick={showModal} />
            </Typography.Title>
          </div>
        </Col>
      </Row>

      <List
        list={list}
        loading={loading}
        error={error}
      />
      <CreateNewListForm
        modalVisible={modalVisible}
        hideModal={hideModal}
      />
    </Layout.Content>
  </Layout>
);

MyLists.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  modalVisible: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired
};

export default MyLists;
