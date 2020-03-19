import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import {
  Modal,
  Form,
  Typography
} from 'antd';

import InputField from '../InputField';

const CreateNewListModal = ({
  showModal,
  modalVisible,
  hideModal,
  handleSubmit,
  errors,
  triggerComponent: TriggerComponent,
  triggerProps
}) => (
  <>
    <TriggerComponent
      {...triggerProps} /* eslint-disable-line react/jsx-props-no-spreading */
      onClick={() => {
        if (triggerProps.onClick) {
          triggerProps.onClick();
        }
        showModal();
      }}
    />

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
  triggerProps: PropTypes.shape({
    onClick: PropTypes.func
  }),
  triggerComponent: PropTypes.func,
  errors: PropTypes.shape({
    serverError: PropTypes.string
  })
};

CreateNewListModal.defaultProps = {
  triggerProps: null,
  triggerComponent: null,
  errors: {
    serverError: null
  }
};

export default CreateNewListModal;
