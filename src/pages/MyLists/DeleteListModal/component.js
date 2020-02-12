import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Typography, Icon } from 'antd';

const DeleteListModal = ({
  name,
  showModal,
  modalVisible,
  hideModal,
  deleteList,
  error
}) => (
  <>
    <Icon type="delete" onClick={showModal} />

    <Modal
      visible={modalVisible}
      onCancel={hideModal}
      onOk={deleteList}
      title="Delete list"
    >
      {error && (
        <Typography.Paragraph
          type="danger"
          style={{ marginBottom: '16px' }}
        >
          {error}
        </Typography.Paragraph>
      )}

      {`Do you want to delete ${name} list?`}
    </Modal>
  </>
);

DeleteListModal.propTypes = {
  name: PropTypes.string.isRequired,
  modalVisible: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  deleteList: PropTypes.func.isRequired,
  error: PropTypes.string
};

DeleteListModal.defaultProps = {
  error: ''
};

export default DeleteListModal;
