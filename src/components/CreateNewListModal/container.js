import React from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import withModal from '../../hoc/withModal';
import CreateNewListModal from './component';

class CreateNewListModalContainer extends React.Component {
  handleTriggerClick = () => {
    const { triggerProps, showModal } = this.props;

    if (triggerProps.onClick) {
      triggerProps.onClick();
    }
    showModal();
  }

  render() {
    const {
      showModal,
      modalVisible,
      hideModal,
      handleSubmit,
      errors,
      triggerComponent,
      triggerProps
    } = this.props;
    return (
      <CreateNewListModal
        showModal={showModal}
        modalVisible={modalVisible}
        hideModal={hideModal}
        handleSubmit={handleSubmit}
        errors={errors}
        handleTriggerClick={this.handleTriggerClick}
        triggerComponent={triggerComponent}
        triggerProps={triggerProps}
      />
    );
  }
}

CreateNewListModalContainer.propTypes = {
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

CreateNewListModalContainer.defaultProps = {
  triggerProps: null,
  triggerComponent: null,
  errors: {
    serverError: null
  }
};

export const handleSubmit = (values, { props, setErrors }) => {
  const { hideModal } = props;
  props.handleSubmitList(values, setErrors, hideModal);
};

const createNewListFormSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required'),
  description: Yup.string()
    .required('Required')
});

const CreateNewListModalWithFormik = withFormik({
  mapPropsToValues: () => ({ name: '', description: '' }),

  validationSchema: createNewListFormSchema,

  handleSubmit,

  displayName: 'CreateNewListForm'
})(CreateNewListModalContainer);

export default withModal(CreateNewListModalWithFormik);
