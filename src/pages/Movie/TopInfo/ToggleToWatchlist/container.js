import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import withToggleState from '../../../../hoc/withToggleState';
import {
  toggleToWatchlist as toggleToWatchlistAction
} from '../../../../../state/movie/actions';
import ToggleToWatchlistComponent from './component';

const ToggleToWatchlistContainer = ({
  id,
  visible,
  toggleVisible,
  toggleToWatchlist
}) => {
  toggleToWatchlist(id, visible);

  return <ToggleToWatchlistComponent visible={visible} toggleVisible={toggleVisible} />;
};

const mapDispatchToProps = {
  toggleToWatchlist: toggleToWatchlistAction
};

ToggleToWatchlistContainer.propTypes = {
  id: PropTypes.number.isRequired,
  toggleToWatchlist: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  toggleVisible: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(withToggleState(ToggleToWatchlistContainer));
