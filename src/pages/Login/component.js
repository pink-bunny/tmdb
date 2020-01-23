import React from 'react';
import PropTypes from 'prop-types';

import {
  Button, Col, Form, Icon, Input, Layout, Row, Typography
} from 'antd';

const Login = ({ sessionSetId }) => (
  <div className="center">
    <Layout>
      <Layout.Content>
        <Row
          type="flex"
          justify="center"
        >
          <Col>
            <Form>
              <Typography.Title>The Movie DB</Typography.Title>
              <Form.Item
                validateStatus="error"
                help="Should be combination of numbers & alphabets"
              >
                <Input
                  prefix={(
                    <Icon
                      type="user"
                      style={{ color: 'rgba(0,0,0,.25)' }}
                    />
                  )}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  prefix={(
                    <Icon
                      type="lock"
                      style={{ color: 'rgba(0,0,0,.25)' }}
                    />
                  )}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={sessionSetId}
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  </div>
);

Login.propTypes = {
  sessionSetId: PropTypes.func.isRequired
};

export default Login;
