import React from 'react';
import PropTypes from 'prop-types';

const NotFound = ({ location }) => {
  const { pathname } = location;
  return (
    <div className="container">
      <h2>
        No match for
        <code>{pathname}</code>
      </h2>
    </div>
  );
};

NotFound.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default NotFound;
