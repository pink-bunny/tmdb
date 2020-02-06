import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { isUserLoggedIn as getUserLoggedIn } from '../../state/session/selectors';

export default function requireAuth(WrappedComponent) {
  function Authentication({ isUserLoggedIn }) {
    if (!isUserLoggedIn) {
      return <Redirect to="/" />;
    }
    return <WrappedComponent />;
  }

  function mapStateToProps(state) {
    return { isUserLoggedIn: getUserLoggedIn(state) };
  }

  Authentication.propTypes = {
    isUserLoggedIn: PropTypes.string
  };
  Authentication.defaultProps = {
    isUserLoggedIn: ''
  };

  return connect(mapStateToProps)(Authentication);
}
