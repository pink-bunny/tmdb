import { withFormik } from 'formik';
import * as Yup from 'yup';

import withModal from '../../hoc/withModal';
import CreateNewListModal from './component';

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

const CreateNewListModalContainer = withFormik({
  mapPropsToValues: () => ({ name: '', description: '' }),

  validationSchema: createNewListFormSchema,

  handleSubmit,

  displayName: 'CreateNewListForm'
})(CreateNewListModal);

export default withModal(CreateNewListModalContainer);
