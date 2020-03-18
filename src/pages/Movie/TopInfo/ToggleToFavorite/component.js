import React from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';

const ToggleToFavoriteComponent = ({
  favorite,
  changeFavoriteStatus
}) => (
  <Icon
    type="heart"
    theme={favorite ? 'filled' : undefined}
    onClick={changeFavoriteStatus}
  />
);

ToggleToFavoriteComponent.propTypes = {
  favorite: PropTypes.bool.isRequired,
  changeFavoriteStatus: PropTypes.func.isRequired
};

export default ToggleToFavoriteComponent;
