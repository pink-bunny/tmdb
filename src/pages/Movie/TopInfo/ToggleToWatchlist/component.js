import React from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';

const ToggleToWatchlistComponent = ({
  isMovieInWatchlist,
  changeWatchlistStatus
}) => (
  <Icon
    type="book"
    theme={isMovieInWatchlist ? 'filled' : undefined}
    onClick={changeWatchlistStatus}
  />
);

ToggleToWatchlistComponent.propTypes = {
  isMovieInWatchlist: PropTypes.bool.isRequired,
  changeWatchlistStatus: PropTypes.func.isRequired
};

export default ToggleToWatchlistComponent;
