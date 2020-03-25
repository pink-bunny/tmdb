import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout, Row, Col, Typography
} from 'antd';
import List from '../../components/List';

const MyList = ({
  listInfo,
  listMovies,
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
              {listInfo ? listInfo.name : ''}
            </Typography.Title>
          </div>
        </Col>
      </Row>

      <List
        emptyListTxt={`No movies in ${listInfo && listInfo.name} found`}
        list={listMovies}
        loading={loading}
        error={error}
        totalItems={totalItems}
        currentPage={currentPage}
        fetchList={fetchList}
        removeModalAction={removeModalAction}
        removeModalTxt={`Do you want to delete this item from the ${listInfo && listInfo.name}?`}
      />

    </Layout.Content>
  </Layout>
);

MyList.propTypes = {
  fetchList: PropTypes.func.isRequired,
  removeModalAction: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  listInfo: PropTypes.objectOf(PropTypes.any),
  error: PropTypes.string.isRequired,
  totalItems: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  listMovies: PropTypes.arrayOf(PropTypes.object)
};
MyList.defaultProps = {
  listInfo: null,
  listMovies: null
};

export default MyList;
