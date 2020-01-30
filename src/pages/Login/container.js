import { connect } from 'react-redux';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import Login from './component';
import { requestSession } from '../../../state/session/actions';

const SignInValidationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Required'),
  password: Yup.string()
    .required('Required')
    .min(4, 'Your password should contain at least 4 symbols')
});

const LoginForm = withFormik({
  mapPropsToValues: () => ({ username: '4betlana', password: 'strawberry91' }),

  validationSchema: SignInValidationSchema,

  handleSubmit: (values, { props, setErrors, setSubmitting }) => {
    props.requestSession(values, setErrors, setSubmitting);
  },

  displayName: 'LoginForm'
})(Login);

const mapDispatchToProps = {
  requestSession
};

export default connect(null, mapDispatchToProps)(LoginForm);
