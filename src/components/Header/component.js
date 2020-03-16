import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  Typography, Row, Col, Avatar, Dropdown, Icon, Menu, Layout
} from 'antd';

const getOverlay = (completeSession) => (
  <Menu>
    <Menu.Item>
      <Link to="/">Dashboard</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item>
      <Link to="/my-lists">My Lists</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/watchlist">Watchlist</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/stubs/favorites">Favorites</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item onClick={completeSession}>Logout</Menu.Item>
  </Menu>
);

const Header = ({ completeSession, userLoggedIn, username }) => (
  <Layout.Header>
    <Row
      type="flex"
      justify="space-between"
    >
      <Col>
        <Typography.Text>THE MOVIE DB</Typography.Text>
      </Col>
      <Col>
        {userLoggedIn && (
          <>
            <Avatar icon="user" />
            {' '}
            <Dropdown overlay={getOverlay(completeSession)}>
              <Typography.Text>
                {`${username} `}
                <Icon type="caret-down" />
              </Typography.Text>
            </Dropdown>
          </>
        )}
      </Col>
    </Row>
  </Layout.Header>
);

Header.propTypes = {
  completeSession: PropTypes.func.isRequired,
  userLoggedIn: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired
};

export default Header;
