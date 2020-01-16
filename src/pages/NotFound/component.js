import React from 'react';
import { useLocation } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="container">
      <h2>
        No match for
        <code>{location.pathname}</code>
      </h2>
    </div>
  );
};

export default NotFound;
