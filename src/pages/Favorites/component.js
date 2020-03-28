import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout, Row, Col, Typography
} from 'antd';
import List from '../../components/List';

const Favorites = ({
  list,
  loading,
  error,
  totalItems,
  currentPage,
  fetchList,
  removeModalAction
}) => (
  <Layout>
    <Layout.Content>
      <Row>
        <Col
          offset={2}
          span={20}
        >
          <div className="top-margin">
            <Typography.Title>
              Favorites
            </Typography.Title>
          </div>
        </Col>
      </Row>

      <List
        emptyListTxt="No movies in favorites found"
        list={list}
        loading={loading}
        error={error}
        totalItems={totalItems}
        currentPage={currentPage}
        fetchList={fetchList}
        removeModalAction={removeModalAction}
        removeModalTxt="Do you want to delete this item from the favorites?"
      />

    </Layout.Content>
  </Layout>
);

Favorites.propTypes = {
  fetchList: PropTypes.func.isRequired,
  removeModalAction: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.object),
  totalItems: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired
};
Favorites.defaultProps = {
  list: null
};

export default Favorites;
