import { withFormik } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import CreateNewListForm from './component';
import {
  createMyList as createMyListAction
} from '../../../../state/my_lists/actions';

const createNewListFormSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required'),
  description: Yup.string()
    .required('Required')
});

const CreateNewListFormContainer = withFormik({
  mapPropsToValues: () => ({ name: '', description: '' }),

  validationSchema: createNewListFormSchema,

  handleSubmit: (values, { props, setErrors }) => {
    const { hideModal } = props;
    props.createMyList(values, setErrors, hideModal);
  },

  displayName: 'CreateNewListForm'
})(CreateNewListForm);

const mapDispatchToPtops = {
  createMyList: createMyListAction
};

export default connect(null, mapDispatchToPtops)(CreateNewListFormContainer);
