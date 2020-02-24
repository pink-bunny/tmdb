import React from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';

const ToggleToWatchlistComponent = ({
  watchlist,
  changeWatchlistStatus
}) => (
  <Icon
    type="book"
    theme={watchlist ? 'filled' : undefined}
    onClick={changeWatchlistStatus}
  />
);

ToggleToWatchlistComponent.propTypes = {
  watchlist: PropTypes.bool.isRequired,
  changeWatchlistStatus: PropTypes.func.isRequired
};

export default ToggleToWatchlistComponent;
