import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { isUserLoggedIn as getUserLoggedIn } from '../../state/session/selectors';

export default function requireAuth(WrappedComponent) {
  const Authentication = (props) => {
    const { isUserLoggedIn } = props;
    if (!isUserLoggedIn) {
      return <Redirect to="/" />;
    }
    return <WrappedComponent {...props} />; /* eslint-disable-line */
  };

  const mapStateToProps = (state) => ({
    isUserLoggedIn: getUserLoggedIn(state)
  });

  Authentication.propTypes = {
    isUserLoggedIn: PropTypes.bool
  };
  Authentication.defaultProps = {
    isUserLoggedIn: ''
  };

  return connect(mapStateToProps)(Authentication);
}
