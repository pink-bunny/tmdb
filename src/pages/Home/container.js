import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Login from '../Login';
import DashboardEmpty from '../DashboardEmpty';

const Home = ({ userLoggedIn }) => (
  userLoggedIn ? <DashboardEmpty /> : <Login />
);

Home.propTypes = {
  userLoggedIn: PropTypes.string.isRequired
};

const mapStateToProps = (state) => (
  { userLoggedIn: state.sessionReducer.session_id }
);

export default connect(mapStateToProps)(Home);
