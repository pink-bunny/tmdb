import React from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';

const ToggleToWatchlistComponent = ({
  visible,
  toggleVisible
}) => (
  <Icon
    type="book"
    theme={visible ? 'filled' : undefined}
    onClick={toggleVisible}
  />
);

ToggleToWatchlistComponent.propTypes = {
  visible: PropTypes.bool.isRequired,
  toggleVisible: PropTypes.func.isRequired
};

export default ToggleToWatchlistComponent;
