import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout, Row, Col, Typography, Icon
} from 'antd';

import ModalHOC from '../../hoc/ModalHOC';
import List from './List';
import CreateNewListForm from './CreateNewListForm';

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
              <ModalHOC
                showModalComponent={({ showModal }) => (
                  <Icon onClick={showModal} type="plus-circle" />
                )}
                modalContent={({ modalVisible, hideModal }) => (
                  <CreateNewListForm
                    modalVisible={modalVisible}
                    hideModal={hideModal}
                  />
                )}
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
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired
};

export default MyLists;
