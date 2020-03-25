import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Typography } from 'antd';

const DeleteListModal = ({
  name,
  handleTriggerClick,
  modalVisible,
  hideModal,
  deleteList,
  error,
  triggerComponent: TriggerComponent,
  triggerProps
}) => (
  <>
    <TriggerComponent
      {...triggerProps} /* eslint-disable-line react/jsx-props-no-spreading */
      onClick={handleTriggerClick}
    />

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
  deleteList: PropTypes.func.isRequired,
  error: PropTypes.string,
  handleTriggerClick: PropTypes.func.isRequired,
  triggerProps: PropTypes.shape({
    onClick: PropTypes.func
  }),
  triggerComponent: PropTypes.func.isRequired
};

DeleteListModal.defaultProps = {
  triggerProps: null,
  error: ''
};

export default DeleteListModal;
