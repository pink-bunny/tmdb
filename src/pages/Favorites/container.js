import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FavoritesComponent from './component';
import {
  fetchFavorites as fetchFavoritesAction,
  toggleToFavorite as toggleToFavoriteAction
} from '../../../state/favorites/actions';
import {
  isFavoritesLoading,
  favoritesTotalItems,
  favoritesCurrentPage,
  favoritesError,
  favoritesList
} from '../../../state/favorites/selectors';

const FavoritesContainer = ({
  list,
  loading,
  error,
  totalItems,
  currentPage,
  fetchFavorites,
  toggleToFavorite
}) => (
  <FavoritesComponent
    list={list}
    loading={loading}
    error={error}
    totalItems={totalItems}
    currentPage={currentPage}
    fetchList={fetchFavorites}
    removeModalAction={toggleToFavorite}
  />
);

FavoritesContainer.propTypes = {
  fetchFavorites: PropTypes.func.isRequired,
  toggleToFavorite: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.object),
  totalItems: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired
};
FavoritesContainer.defaultProps = {
  list: null
};

const mapDispatchToPtops = {
  fetchFavorites: fetchFavoritesAction,
  toggleToFavorite: toggleToFavoriteAction
};

const mapStateToProps = (state) => ({
  loading: isFavoritesLoading(state),
  list: favoritesList(state),
  error: favoritesError(state),
  totalItems: favoritesTotalItems(state),
  currentPage: favoritesCurrentPage(state)
});

export default connect(mapStateToProps, mapDispatchToPtops)(FavoritesContainer);
