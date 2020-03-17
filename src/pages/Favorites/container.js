import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import List from '../../components/List';
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
  <List
    listTitle="Favorites"
    emptyListTxt="No movies in favorites found"
    list={list}
    loading={loading}
    error={error}
    totalItems={totalItems}
    currentPage={currentPage}
    fetchList={fetchFavorites}
    removeModalAction={toggleToFavorite}
    removeModalTxt="Do you want to delete this item from the favorites?"
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
