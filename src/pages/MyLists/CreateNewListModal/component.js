import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import {
  Modal,
  Form,
  Typography,
  Icon
} from 'antd';

import InputField from '../../../components/InputField';

const CreateNewListModal = ({
  showModal,
  modalVisible,
  hideModal,
  handleSubmit,
  errors
}) => (
  <>
    <Icon onClick={showModal} type="plus-circle" />

    <Modal
      visible={modalVisible}
      onCancel={hideModal}
      onOk={handleSubmit}
      okText="Create"
      title="Create list"
    >
      {errors.serverError && (
        <Typography.Paragraph
          type="danger"
          style={{ marginBottom: '16px' }}
        >
          {errors.serverError}
        </Typography.Paragraph>
      )}
      <Form>
        <Field
          name="name"
          placeholder="Name"
          component={InputField}
        />
        <Field
          name="description"
          placeholder="Description"
          component={InputField}
        />
      </Form>
    </Modal>
  </>
);

CreateNewListModal.propTypes = {
  modalVisible: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    serverError: PropTypes.string
  })
};

CreateNewListModal.defaultProps = {
  errors: {
    serverError: null
  }
};

export default CreateNewListModal;
