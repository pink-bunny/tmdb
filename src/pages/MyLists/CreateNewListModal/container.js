import { withFormik } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import withModal from '../../../hoc/withModal';
import CreateNewListModal from './component';
import {
  createMyList as createMyListAction
} from '../../../../state/my_lists/actions';

export const handleSubmit = (values, { props, setErrors }) => {
  const { hideModal } = props;
  props.createMyList(values, setErrors, hideModal);
};

const createNewListFormSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required'),
  description: Yup.string()
    .required('Required')
});

const CreateNewListModalContainer = withFormik({
  mapPropsToValues: () => ({ name: '', description: '' }),

  validationSchema: createNewListFormSchema,

  handleSubmit,

  displayName: 'CreateNewListForm'
})(CreateNewListModal);

const mapDispatchToPtops = {
  createMyList: createMyListAction
};

export default connect(null, mapDispatchToPtops)(withModal(CreateNewListModalContainer));
