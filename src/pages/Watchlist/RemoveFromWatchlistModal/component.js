import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Icon } from 'antd';

const RemoveFromWatchlistModalComponent = ({
  title,
  showModal,
  modalVisible,
  hideModal,
  removeFromWatchlist
}) => (
  <>
    <Icon type="delete" onClick={showModal} />

    <Modal
      visible={modalVisible}
      onCancel={hideModal}
      onOk={removeFromWatchlist}
      title="Delete list"
    >
      {`Do you want to delete ${title} from the watchlist?`}
    </Modal>
  </>
);

RemoveFromWatchlistModalComponent.propTypes = {
  title: PropTypes.string.isRequired,
  modalVisible: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  removeFromWatchlist: PropTypes.func.isRequired
};

export default RemoveFromWatchlistModalComponent;
