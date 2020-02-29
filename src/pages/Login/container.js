import { connect } from 'react-redux';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import Login from './component';
import { requestSession } from '../../../state/session/actions';

export const handleSubmit = (values, { props, setErrors, setSubmitting }) => {
  props.requestSession(values, setErrors, setSubmitting);
};

const SignInValidationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Required'),
  password: Yup.string()
    .required('Required')
    .min(4, 'Your password should contain at least 4 symbols')
});

const LoginForm = withFormik({
  mapPropsToValues: () => ({ username: '', password: '' }),

  validationSchema: SignInValidationSchema,

  handleSubmit,

  displayName: 'LoginForm'
})(Login);

const mapDispatchToProps = {
  requestSession
};

export default connect(null, mapDispatchToProps)(LoginForm);
