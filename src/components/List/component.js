import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout, Row, Col, Typography
} from 'antd';

import MoviesList from '../MoviesList';
import RemoveFromListModal from './RemoveFromListModal';

const ListComponent = ({
  listTitle,
  emptyListTxt,
  list,
  loading,
  error,
  totalItems,
  currentPage,
  fetchList,
  removeModalAction,
  removeModalTxt
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
              {listTitle}
            </Typography.Title>
          </div>
        </Col>
      </Row>

      <MoviesList
        list={list}
        error={error}
        loading={loading}
        onPaginationClick={fetchList}
        totalItems={totalItems}
        currentPage={currentPage}
        emptyListTxt={emptyListTxt}
        actionsList={(id, title) => ([
          <RemoveFromListModal
            key="delete"
            id={id}
            title={title}
            removeModalAction={removeModalAction}
            removeModalTxt={removeModalTxt}
          />
        ])}
      />

    </Layout.Content>
  </Layout>
);

ListComponent.propTypes = {
  listTitle: PropTypes.string.isRequired,
  emptyListTxt: PropTypes.string.isRequired,
  fetchList: PropTypes.func.isRequired,
  removeModalAction: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  removeModalTxt: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.object),
  totalItems: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired
};
ListComponent.defaultProps = {
  list: null
};

export default ListComponent;
