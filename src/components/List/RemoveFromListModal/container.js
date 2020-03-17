import React from 'react';
import PropTypes from 'prop-types';

import withModal from '../../../hoc/withModal';
import RemoveFromListModalComponent from './component';

class RemoveFromListModalContainer extends React.Component {
  removeFromList = () => {
    const {
      id,
      removeModalAction
    } = this.props;
    const newItemStatus = false;
    const needRefetchList = true;

    removeModalAction(id, newItemStatus, needRefetchList);
  }

  render() {
    const {
      modalVisible,
      hideModal,
      showModal,
      title,
      removeModalTxt
    } = this.props;

    return (
      <RemoveFromListModalComponent
        modalVisible={modalVisible}
        hideModal={hideModal}
        showModal={showModal}
        title={title}
        removeModalTxt={removeModalTxt}
        removeFromList={this.removeFromList}
      />
    );
  }
}

RemoveFromListModalContainer.propTypes = {
  removeModalAction: PropTypes.func.isRequired,
  modalVisible: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  removeModalTxt: PropTypes.string.isRequired
};

export default withModal(RemoveFromListModalContainer);
