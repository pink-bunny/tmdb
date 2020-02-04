import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

import { Row, Col } from 'antd';
import SearchComponent from '../../../components/Search';

const Search = ({
  handleSubmit
}) => (
  <Row type="flex">
    <Col
      xs={{ span: 22, offset: 1 }}
      sm={{ span: 20, offset: 2 }}
      md={{ span: 18, offset: 3 }}
      lg={{ span: 16, offset: 4 }}
      xl={{ span: 14, offset: 5 }}
    >
      <div className="top-margin">
        <form>
          <Field
            name="search"
            placeholder="Enter movie name"
            enterButton="Search"
            onSearch={handleSubmit}
            component={SearchComponent}
          />
        </form>
      </div>
    </Col>
  </Row>
);

Search.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default Search;
