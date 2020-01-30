import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import {
  Form, Col, Layout, Row, Typography
} from 'antd';

import Button from '../../components/Button';
import InputField from '../../components/InputField';

const Login = ({ handleSubmit, isSubmitting, errors }) => (
  <div className="center">
    <Layout>
      <Layout.Content>
        <Row
          type="flex"
          justify="center"
        >
          <Col>
            <Form onSubmit={handleSubmit}>
              <Typography.Title>The Movie DB</Typography.Title>
              {errors.serverError && (
                <Typography.Paragraph
                  type="danger"
                  style={{ marginBottom: '16px' }}
                >
                  {errors.serverError}
                </Typography.Paragraph>
              )}
              <Field
                name="username"
                id="username"
                placeholder="Username"
                icon="user"
                component={InputField}
              />
              <Field
                name="password"
                id="password"
                type="password"
                placeholder="Password"
                icon="lock"
                component={InputField}
              />
              <Form.Item>
                <Button
                  loading={isSubmitting}
                  disabled={isSubmitting}
                  text="Log in"
                  htmlType="submit"
                />
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  </div>
);

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  errors: PropTypes.shape({
    serverError: PropTypes.string
  })
};

Login.defaultProps = {
  errors: {
    serverError: null
  }
};

export default Login;
