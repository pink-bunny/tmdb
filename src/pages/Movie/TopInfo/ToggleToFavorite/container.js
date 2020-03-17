import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  toggleToFavorite as toggleToFavoriteAction
} from '../../../../../state/favorites/actions';
import ToggleToFavoriteComponent from './component';

class ToggleToFavoriteContainer extends React.Component {
  changeFavoriteStatus = () => {
    const {
      id,
      favorite,
      toggleToFavorite
    } = this.props;
    const updatedStatus = !favorite;

    toggleToFavorite(id, updatedStatus);
  }

  render() {
    const { favorite } = this.props;

    return (
      <ToggleToFavoriteComponent
        changeFavoriteStatus={this.changeFavoriteStatus}
        favorite={favorite}
      />
    );
  }
}

const mapDispatchToProps = {
  toggleToFavorite: toggleToFavoriteAction
};

ToggleToFavoriteContainer.propTypes = {
  id: PropTypes.number.isRequired,
  toggleToFavorite: PropTypes.func.isRequired,
  favorite: PropTypes.bool.isRequired
};

export default connect(null, mapDispatchToProps)(ToggleToFavoriteContainer);
