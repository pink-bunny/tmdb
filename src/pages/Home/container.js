import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Login from '../Login';
import DashboardEmpty from '../DashboardEmpty';
import { isUserLoggedIn } from '../../../state/session/selectors';

const Home = ({ userLoggedIn }) => (
  userLoggedIn ? <DashboardEmpty /> : <Login />
);

Home.propTypes = {
  userLoggedIn: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  userLoggedIn: isUserLoggedIn(state)
});

export default connect(mapStateToProps)(Home);
