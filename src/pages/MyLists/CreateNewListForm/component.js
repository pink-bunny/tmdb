import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import { Modal, Form, Typography } from 'antd';

import InputField from '../../../components/InputField';

const CreateNewListForm = ({
  modalVisible,
  hideModal,
  handleSubmit,
  errors
}) => (
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
);

CreateNewListForm.propTypes = {
  modalVisible: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    serverError: PropTypes.string
  })
};

CreateNewListForm.defaultProps = {
  errors: {
    serverError: null
  }
};

export default CreateNewListForm;
