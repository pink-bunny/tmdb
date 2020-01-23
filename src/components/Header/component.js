import React from 'react';
import {
  Typography, Row, Col, Avatar, Dropdown, Icon, Menu, Layout
} from 'antd';
import { Link } from 'react-router-dom';

const Overlay = () => (
  <Menu>
    <Menu.Item>
      <Link to="/stubs/dashboard">Dashboard</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item>
      <Link to="/stubs/lists">My Lists</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/stubs/watchlist">Watchlist</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/stubs/favorites">Favorites</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item>Logout</Menu.Item>
  </Menu>
);

const Header = () => (
  <Layout.Header>
    <Row
      type="flex"
      justify="space-between"
    >
      <Col>
        <Typography.Text>THE MOVIE DB</Typography.Text>
      </Col>
      <Col>
        <Avatar icon="user" />
        {' '}
        <Dropdown overlay={Overlay}>
          <Typography.Text>
            Username
            {' '}
            <Icon type="caret-down" />
          </Typography.Text>
        </Dropdown>
      </Col>
    </Row>
  </Layout.Header>
);

export default Header;
