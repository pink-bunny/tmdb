import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

const DeleteListModal = ({ deleteListModal }) => (
  <Icon type="delete" onClick={deleteListModal} />
);

DeleteListModal.propTypes = {
  deleteListModal: PropTypes.func.isRequired
};

export default DeleteListModal;
