import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Login from '../Login';
import Dashboard from '../Dashboard';
import { isUserLoggedIn } from '../../../state/session/selectors';

const Home = ({ userLoggedIn }) => (
  userLoggedIn ? <Dashboard /> : <Login />
);

Home.propTypes = {
  userLoggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  userLoggedIn: isUserLoggedIn(state)
});

export default connect(mapStateToProps)(Home);
