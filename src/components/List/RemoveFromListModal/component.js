import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Icon } from 'antd';

const RemoveFromListModalComponent = ({
  title,
  showModal,
  modalVisible,
  hideModal,
  removeFromList,
  removeModalTxt
}) => (
  <>
    <Icon type="delete" onClick={showModal} />

    <Modal
      visible={modalVisible}
      onCancel={hideModal}
      onOk={removeFromList}
      title={`Delete ${title}`}
    >
      {removeModalTxt}
    </Modal>
  </>
);

RemoveFromListModalComponent.propTypes = {
  title: PropTypes.string.isRequired,
  removeModalTxt: PropTypes.string.isRequired,
  modalVisible: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  removeFromList: PropTypes.func.isRequired
};

export default RemoveFromListModalComponent;
